

export type Li<T> = Array<T>
export type IdMap = { [key: string]: string } 
export type HashMap<T> = { [key: string]: T }



// Try custom reducer typings.
// type SimpleAction = { type: string }
// type PayloadAction<T> = SimpleAction & { payload: T }
// export type Action<T = undefined> = T extends undefined ? SimpleAction : PayloadAction<T>

// export type StateFn<T, P> = (state: T, action: P) => T

// export type StateFn2<T, P extends Action<S>, S> = (state: T, action: P) => T

// export type ActionsMap<T, P extends Action<S>,S = undefined> = 
//     HashMap<S extends undefined ? StateFn<T, P> : StateFn2<T, P, S>>[infer S]

// export type inferedMap<T,P,S>  = ActionsMap<T, P, S>[]