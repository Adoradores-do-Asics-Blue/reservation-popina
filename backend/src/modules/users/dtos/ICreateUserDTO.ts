export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  whatsapp?: string;
  restaurant?: string;
  openingHours?: number;
  finishingHours?: number;
  qtdAppointments?: number;
}
