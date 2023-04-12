import { Body, Controller, Post } from '@nestjs/common';
import { User } from './entities/users';
import { UserService } from './services/users';

@Controller('users')
export class createUserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    async create(@Body() user: User) {
        const createdUser = await this.userService.create(user);
        return { user: createdUser };
    }
}