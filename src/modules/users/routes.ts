import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { createUserController } from './controllers';

interface MyRoute {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const routes: Routes = [
    {
        path: '/users',
        children: [
            {
                path: '/create',
                method: 'POST',
                handler: createUserController.prototype.create,
            }as MyRoute,
        ],
    },
];

@Module({
    imports: [RouterModule.forRoutes(routes)],
})

export class UserRoutesModule {}