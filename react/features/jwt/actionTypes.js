import { Symbol } from '../base/react';

/**
 * The type of redux action which stores a specific JSON Web Token (JWT) into
 * the redux store.
 *
 * {
 *     type: SET_JWT,
 *     jwt: string
 * }
 */
export const SET_JWT = Symbol('SET_JWT');
