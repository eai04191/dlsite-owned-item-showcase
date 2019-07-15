declare module DLsitePurchasesAPI {
    export interface WorkType {
        value: string;
        category_id: string;
        category_name: string;
        name: string;
    }

    export interface WorkFiles {
        sam: string;
        mini: string;
        main: string;
        ["sam@2x"]: string;
        ["sam@3x"]: string;
    }

    export interface Work {
        workno: string;
        sales_date: string;
        rental_id?: any;
        rental_time?: any;
        rental_activate_date?: any;
        rental_expired_date?: any;
        purchase_type: number;
        inservice: number;
        touch_inservice: number;
        work_name: string;
        work_name_kana: string;
        maker_id: string;
        maker_name: string;
        maker_name_kana: string;
        author_name?: any;
        work_type: WorkType;
        file_type: string;
        age_category: number;
        dl_format: number;
        site_id: string;
        image_mini?: any;
        content_length: number;
        content_count: number;
        tags?: any;
        touch_content_count: number;
        regist_date: string;
        upgrade_date?: any;
        download_start_date?: any;
        review_point: number;
        play_id: number;
        work_files: WorkFiles;
        touch_site_id: string;
        os: string[];
        is_playwork: boolean;
        is_playexec: boolean;
        content_size: string;
    }

    export interface WorkType2 {
        value: string;
        category_id: string;
        category_name: string;
        name: string;
    }

    export interface RootObject {
        total: number;
        limit: number;
        offset: number;
        works: Work[];
        work_types: WorkType2[];
        last: string;
    }
}
