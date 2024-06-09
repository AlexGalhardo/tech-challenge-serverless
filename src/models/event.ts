export enum ActionEventEnum {
    USER_CREATED = "user.created",
}

export interface EventKey {
    pk: string;
    created_at: string;
}

export interface EventMetadata {
    action: ActionEventEnum;
    ip?: string;
    request_id: string;
    user_agent?: string;
}

export type EventAuthor = {
    auth?: string;
    id?: string;
    email?: string;
    user_agent?: string;
    ip?: string;
    roles?: string;
};

export type EventBase = {
    request_id: string;
    service: string;
    author: EventAuthor;
};

export interface Event<T> extends EventKey, EventMetadata {
    data_event: T;
}
