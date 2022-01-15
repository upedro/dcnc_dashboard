export interface IUser {
    user?: object;
    token?: string;
}

export interface IToken {
    token?: string;
}

export interface IContext extends IUser {
    login: (email:string,password:string) => Promise<void>;
    getUser: () => Promise<void>;
    logout: () => void;
    email?: any
    avatar?: any
    
}

export interface IAuthProvider {
    children: JSX.Element;
}