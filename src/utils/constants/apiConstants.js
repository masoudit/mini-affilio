export const ENDPOINTS = {
  // Account
  ACCOUNT_LOGIN: "/Account/Login",
  ACCOUNT_AUTO_LOGIN: "/Account/AutoLogin",
  ACCOUNT_LOGOUT: "/Account/Logout",
  ACCOUNT_REGISTER: "/Account/RegisterAndVerify",
  ACCOUNT_SEND_CODE: "/Account/unregistered/SendCode",
  ACCOUNT_RESEND_CODE: "/Account/ResendCode",
  ACCOUNT_VERIFY: "/Account/Verify",
  ACCOUNT_GET_USER_DETAIL: "/Account/{user_id}/detail",
  ACCOUNT_CHANGE_PASSWORD: "/Account/ChangePassword",
  ACCOUNT_RESET_PASSWORD: "/Account/ResetPassword",
  ACCOUNT_SET_USER_TYPE:
    "/Account/SetUserType?user_id={user_id}&type={roleType}",
  ACCOUNT_REFRESH_CACHE: "/Account/RefreshCache",

  // Contract
  CONTRACT_GET: "/Contract/{contract_id}",
  CONTRACT_LIST: "/Contract/list",
  CONTRACT_ADD: "/Contract/add",
  CONTRACT_NEW_USER: "/Contract/new/user/{user_id}/type/{type}",
  CONTRACT_UPDATE: "/Contract/update",
  CONTRACT_UPDATE_STATUS:
    "/Contract/{contract_id}/user/{user_id}/update/status/{status}",
  CONTRACT_GET_UPLOAD_PAPER: "/Contract/{contract_id}/uploadPaper/{file_id}",
  CONTRACT_GET_USER_APPROVE: "/Contract/{contract_id}/user/{user_id}/approve",
  CONTRACT_REFRESH_CACHE: "/Contract/RefreshCache",
  CONTRACT_TEMPLATE_TYPE_GET: "/Contract/template/type/{type}/get",
  CONTRACT_TEMPLATE_GET: "/Contract/template/{contract_id}/get",
  CONTRACT_TEMPLATE_ADD: "/Contract/template/add",
  CONTRACT_TEMPLATE_UPDATE: "/Contract/template/update",
  CONTRACT_TEMPLATE_LIST: "/Contract/template/list",
  CONTRACT_TEMPLATE_REFRESH_CACHE: "/Contract/template/refreshCache",

  // File
  FILE_ADD: "/File/Add",
  FILE_DETAIL: "/File/{file_id}/detail",
  FILE_REFRESH_CACHE: "/File/RefreshCache",
  FILE_STORAGE_REFRESH_CACHE: "/File/storage/RefreshCache",

  // Location
  LOCATION_GET_COUNTRIES: "/Location/GetCountries",
  LOCATION_GET_PROVINCES: "/Location/GetProvinces",
  LOCATION_GET_BY_PARENT_ID: "/Location/GetByParentId/{parent_id}",
  LOCATION_GET_LOCATION_DETAIL: "/Location/GetLocationDetail/{location_id}",
  LOCATION_REFRESH_CACHE: "/Location/RefreshCache",

  // Merchant
  MERCHANT_GET_DETAIL: "/Merchant/{user_id}/GetDetail",
  MERCHANT_SET_COMPANY_INFO: "/Merchant/{user_id}/SetCompanyInfo",
  MERCHANT_SET_CONTACT_INFO: "/Merchant/{user_id}/SetContactInfo",
  MERCHANT_GET_LIST: "/Merchant/List",
  MERCHANT_SET_VAT_INFO: "/Merchant/{user_id}/SetVatInfo",
  MERCHANT_REFRESH_CACHE: "/Merchant/RefreshCache",

  // Publisher
  PUBLISHER_GET_DETAIL: "/Publisher/{user_id}/GetDetail",
  PUBLISHER_SET_LEGAL_STATUS: "/Publisher/{user_id}/SetLegalStatus/{status}",
  PUBLISHER_SET_PERSONAL_INFO: "/Publisher/{user_id}/SetPersonalInfo",
  PUBLISHER_GET_LIST: "/Publisher/List",
  PUBLISHER_SET_COMPANY_INFO: "/Publisher/{user_id}/SetCompanyInfo",
  PUBLISHER_SET_CONTACT_INFO: "/Publisher/{user_id}/SetContactInfo",
  PUBLISHER_SET_BANK_ACCOUNT_INFO: "/Publisher/{user_id}/SetBankAccountInfo",
  PUBLISHER_SET_VAT_INFO: "/Publisher/{user_id}/SetVatInfo",
  PUBLISHER_REFRESH_CACHE: "/Publisher/RefreshCache",

  // Shared
  SHARED_CONTENT_TYPE: "/Shared/content/type/{type}",
  SHARED_CONTENT_FILTER_TYPES: "/Shared/content/filterTypes",
  SHARED_SUBJECT_GET: "/Shared/subject/{subject_id}/get",
  SHARED_SUBJECT_LIST: "/Shared/subject/list",
  SHARED_SUBJECT_ADD: "/Shared/subject/add",
  SHARED_SUBJECT_EDIT: "/Shared/subject/edit",
  SHARED_SUBJECT_DELETE: "/Shared/subject/{subject_id}/delete",
  SHARED_SUBJECT_REFRESHED_SUBJECT_CACHE: "/Shared/subject/RefreshSubjectCache",

  // Website
  WEBSITE_LIST: "/Website/List",
  WEBSITE_ADD: "/Website/Add",
  WEBSITE_DETAIL: "/Website/{website_id}/detail",
  WEBSITE_EDIT: "/Website/Edit",
  WEBSITE_STATUS: "/Website/{website_id}/status/{status}",
  WEBSITE_DELETE: "/Website/{website_id}/delete",
  WEBSITE_MERCHANT_LIST: "/Website/merchant/{merchant_id}/list",
  WEBSITE_LEVEL_LIST: "/Website/level/list",
  WEBSITE_LEVEL_ADD: "/Website/{website_id}/level/add",
  WEBSITE_LEVEL_EDIT: "/Website/level/edit",
  WEBSITE_LEVEL_DEFAULT: "/Website/level/{level_id}/default/{is_default}",
  WEBSITE_LEVEL_ACTIVE: "/Website/level/{level_id}/active/{status}",
  WEBSITE_LEVEL_DETAIL: "/Website/level/{level_id}/detail",
  WEBSITE_REFRESH_CACHE: "/Website/RefreshCache",
};

export const ERROR_CODES = {
  ACCOUNT_NOT_VERIFIED: -2003,
};

export const SORT_ORIENTATION = {
  DESCENDING: 1,
  ASCENDING: 2,
};

export const GENDER = {
  FEMALE: 1,
  MALE: 2,
  UNKNOWN: 3,
};

export const COMPANY_TYPE = {
  PRIVATE: 1,
  PUBLIC: 2,
};

export const LEGAL_STATUS = {
  NATURAL: 1,
  LEGAL: 2,
};

export const USER_TYPE = {
  PUBLISHER: 1,
  MERCHANT: 2,
  SUPER_ADMIN: 3,
};

export const CONTENT_TYPE = {
  EMAIL_SUBJECT: 1,
  EMAIL_BODY: 2,
  REGISTER_SMS_TEXT: 3,
  PUBLISHER_TERMS_AND_CONDITIONS: 4,
  MERCHANT_TERMS_AND_CONDITIONS: 5,
};

export const RESEND_CODE_CONSUMER = {
  REGISTER: 1,
  LOGIN: 2,
  CHANGE_PASSWORD: 3,
};

export const VERIFY_STATUS = {
  UNVERIFIED: 0,
  PENDING: 1,
  FAILED: 2,
  VERIFIED: 3,
};

export const KYC_STATUS = {
  UNVERIFIED: 1,
  EMAIL_VERIFIED: 2,
  PERSONAL_INFO_VERIFIED: 3,
  FULL_VERIFIED: 4,
  PENDING_PERSONAL_VERIFYING: 5,
  PENDING_FULL_VERIFYING: 6,
  REJECT_PERSONAL_INFO: 7,
  REJECT_FULL_VERIFYING: 8,
};

export const FILE_OBJECT_TYPE = {
  USER: 1,
  PUBLISHER: 2,
  MERCHANT: 3,
  CONTRACT: 4,
};

export const FILE_MEDIA_TYPE = {
  IMAGE: 1,
  VIDEO: 2,
  AUDIO: 3,
  DOCUMENT: 4,
};

export const FILE_FILE_TYPE = {
  NATIONAL_CARD: 1,
  BIRTH_CERTIFICATE: 2,
  VAT_DOCUMENT: 3,
  NEWSPAPER_DOCUMENT: 4,
  PAPER_CONTRACT: 5,
};

export const CONTRACT_STATUS = {
  NEW: 1,
  APPROVED: 2,
  EXPIRED: 3,
  BLOCKED: 4,
};

export const CONTRACT_TEMPLATE_TYPE = {
  MERCHANT: 1,
  PUBLISHER: 2,
};
