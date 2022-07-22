import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom'
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/a2-registration/Registration";
import {Profile} from "../../../n2-features/f1-auth/a3-profile/Profile";
import {Error404} from "../../../n2-features/f1-auth/a4-Error404/Error404";
import {RecoveryPassword} from "../../../n2-features/f1-auth/a5-recovery-password/recoveryPassword";
import {NewPassword} from "../../../n2-features/f1-auth/a6-newPassword/NewPassword";
import {Test} from "../../../n2-features/f0-test/Test";

export const RoutesPage = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'test'} element={<Test/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'/404'} element={<Error404/>}/>
                <Route path={'recoveryPassword'} element={<RecoveryPassword/>}/>
                <Route path={'newPassword'} element={<NewPassword/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
};