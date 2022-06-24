import React, { FC } from 'react';
import { Route, RouteProps } from "react-router-dom";
import { Roles } from './model'

export const StudentRoute: FC<RouteProps & { roleId: number }> = props => {
    return (
        props.roleId === Roles.Student ?
            <Route {...props}></Route>
            :
            null
    );
}

export const AdminRoute: FC<RouteProps & { roleId: number }> = props => {
    return (
        props.roleId === Roles.Admin ?
            <Route {...props}></Route>
            :
            null
    );
}

export const CRRoute: FC<RouteProps & { roleId: number }> = props => {
    return (
        props.roleId === Roles.CR ?
            <Route {...props}></Route>
            :
            null
    );
}
