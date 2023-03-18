import { UserInformation } from './../interface/user.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: UserInformation }>();
    const user = request.user;

    return data ? user && user[data as keyof UserInformation] : user;
});
