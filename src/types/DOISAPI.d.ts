declare module DOISAPI {
    export interface Root {
        meta: meta | null;
        data: DLsitePurchasesAPI.Root;
    }

    export interface meta {
        name: string;
        date: string;
    }
}
