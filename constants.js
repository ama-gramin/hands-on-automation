'use strict';

const URL_BASE = 'https://pages.awscloud.com/';
const URL_TYPE1 = URL_BASE + 'event_JAPAN_Ondemand_Hands-on-for-Beginners-';
const URL_TYPE2 = URL_BASE + 'JAPAN-event-OE-Hands-on-for-Beginners-';
const URL_TYPE3 = URL_BASE + 'event_JAPAN_Hands-on-for-Beginners-';

const COLUMNS_TYPE1 = {
    // 姓
    LastName: '名字',
    // 名
    FirstName: '名前',
    // 勤務先メールアドレス
    Email: 'test@example.com',
    // 職種
    Job_Role__c: 'Developer / Engineer',
    // 所属部署名/役職
    Title: 'テスト部リーダー',
    // 電話番号
    Phone: '0123456789',
    // 御社名
    Company: 'テスト株式会社',
    // 御社の従業員数
    Company_Size__c: '100-499 Employees',
    // 業種
    Industry: 'Computers & Electronics',
    // 会社の種類
    Company_Type__c: 'Small-Medium Business',
    // 国 / 地域
    Country: 'JP',
    // 州/都道府県
    State: 'Shimane',
    // 勤務先ご住所
    City: '',
    // 郵便番号
    PostalCode: '123-4567',
    // AWS のご利用状況
    Level_of_AWS_Usage__c: 'Run multiple production workloads on AWS',
    // 導入予定時期
    Project_Timeframe__c: 'None Planned',
    // ご利用用途
    LDR_Solution_Area__c: 'Web & Web Apps',
    // 本イベントをお知りになった経緯
    Marketing_Program_Field_1__c: 'Company Member',
};

const COLUMNS_TYPE2 = {
    // 勤務先メールアドレス
    Email: 'test@example.com',
    // 姓
    LastName: '名字',
    // 名
    FirstName: '名前',
    // 御社名
    Company: 'テスト株式会社',
    // 所属部署名 / 役職
    zOPprogressiveprofilingjtitle: 'テスト部リーダー',
    // 電話番号
    zOPprogressiveprofilingpnum: '0123456789',
    // 携帯電話などの日中連絡が可能な電話番号
    MobilePhone: '0123456789',
    // 国/地域
    zOPprogressiveprofilingcntry: 'JP',
    // 郵便番号
    zOPprogressiveprofilingpcode: '123-4567',
    // 勤務先のご住所
    City: '',
    // 職種
    zOPprogressiveprofilingjrole: 'Developer / Engineer',
    // 業種
    zOPprogressiveprofilingind: 'Computers & Electronics',
    // 会社の種類
    Company_Type__c: 'Small-Medium Business',
    // 御社の従業員数
    Company_Size__c: '100-499 Employees',
    // AWS のご利用状況
    zOPprogressiveprofilingausag: 'Run multiple production workloads on AWS',
    // 導入予定時期
    Project_Timeframe__c: 'None Planned',
    // ご利用用途
    zOPprogressiveprofilingucase: 'Gaming',
    // イベントの参加目的
    Project_Description__c: 'Besides the above, attending by a direction from your supervisor',
    // 本イベントをお知りになった経緯
    Marketing_Program_Field_1__c: 'Company Member',
};

const COLUMNS_TYPE3 = {
    // 姓
    LastName: '名字',
    // 名
    FirstName: '名前',
    // 勤務先メールアドレス
    Email: 'test@example.com',
    // 職種
    Job_Role__c: 'Developer / Engineer',
    // 所属部署名/役職
    Title: 'テスト部リーダー',
    // 電話番号
    Phone: '0123456789',
    // 御社名
    Company: 'テスト株式会社',
    // 御社の従業員数
    Company_Size__c: '100-499 Employees',
    // 業種
    Industry: 'Gaming',
    // 会社の種類
    Company_Type__c: 'Small-Medium Business',
    // 国 / 地域
    Country: 'JP',
    // 州/都道府県
    State: 'Shimane',
    // 勤務先ご住所
    City: '',
    // 郵便番号
    PostalCode: '123-4567',
    // AWS のご利用状況
    Level_of_AWS_Usage__c: 'Run multiple production workloads on AWS',
    // 導入予定時期
    Project_Timeframe__c: 'None Planned',
    // ご利用用途
    LDR_Solution_Area__c: 'Web & Web Apps',
    // 本イベントをお知りになった経緯
    Marketing_Program_Field_1__c: 'Company Member',
};
