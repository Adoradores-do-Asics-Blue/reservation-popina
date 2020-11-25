import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const allProviders = await listProviders.execute({
      user_id,
    });

    const providers = allProviders.filter(
      provider => provider.restaurant === 'true',
    );

    return response.json(classToClass(providers));
  }
}
