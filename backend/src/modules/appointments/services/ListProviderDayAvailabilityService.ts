import { injectable, inject } from 'tsyringe';
import { getHours, isAfter, addHours } from 'date-fns';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  user_id?: string;
  day: number;
  month: number;
  year: number;
}

type IResponse = Array<{
  hour: number;
  qtdAppointmentsInHour: number;
  available: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
    user_id,
  }: IRequest): Promise<IResponse> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      },
    );

    // console.log(appointments);

    if (!users) {
      throw new AppError('User not found.');
    }

    const open = users.filter(user => user.id === provider_id);

    const size = open[0].finishingHours - open[0].openingHours;

    const eachHourArray = Array.from(
      { length: size + 1 },
      (_, index) => index + open[0].openingHours,
    );

    const DateGMT = new Date(Date.now());
    const currentDate = addHours(DateGMT, -3);

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.filter(
        appointment => getHours(appointment.date) === hour,
      );

      let qtdAppointmentsInHour = 0;

      if (hasAppointmentInHour.length !== 0) {
        qtdAppointmentsInHour = hasAppointmentInHour.length;
      }

      const compareDate = new Date(year, month - 1, day, hour - 3);

      return {
        hour,
        qtdAppointmentsInHour,
        available:
          isAfter(compareDate, currentDate) && qtdAppointmentsInHour < 5,
      };
    });

    return availability;
  }
}

export default ListProviderDayAvailabilityService;
