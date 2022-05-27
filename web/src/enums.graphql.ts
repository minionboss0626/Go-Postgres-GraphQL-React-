/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

export type AssistantsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'USER_ID_ASC'
  | 'USER_ID_DESC'
  | 'TELEPHONE_ASC'
  | 'TELEPHONE_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'FIRST_NAME_ASC'
  | 'FIRST_NAME_DESC'
  | 'LAST_NAME_ASC'
  | 'LAST_NAME_DESC'
  | 'DATE_OF_BIRTH_ASC'
  | 'DATE_OF_BIRTH_DESC'
  | 'GENDER_ASC'
  | 'GENDER_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type Gender =
  | 'MALE'
  | 'FEMALE' 

export type TherapistType =
  | 'PSYCHOTHERAPIST'
  | 'PSYCHOLOGIST'
  | 'PSYCHIATRIST'
  | 'NEUROLOGIST'
  | 'PEDIATRIST'
  | 'SOCIAL_WORKER'
  | 'PEDAGOGUE'
  | 'DEFECTOLOGIST'
  | 'PHONETICIAN'
  | 'NEUROPSYCHIATRIST'
  | 'CLINICAL_PSYCHOLOGIST'
  | 'SUPERVISOR'
  | 'LOGOPED'
  | 'OTHER' 

export type ClientAssignedTherapistsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CLIENT_ID_ASC'
  | 'CLIENT_ID_DESC'
  | 'THERAPIST_ID_ASC'
  | 'THERAPIST_ID_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudiesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CLIENT_ID_ASC'
  | 'CLIENT_ID_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyRelationsOrderBy =
  | 'NATURAL'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'RELATED_CASE_STUDY_ID_ASC'
  | 'RELATED_CASE_STUDY_ID_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC' 

export type CaseStudyTherapistsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'THERAPIST_ID_ASC'
  | 'THERAPIST_ID_DESC'
  | 'PRIMARY_ASC'
  | 'PRIMARY_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyTreatmentsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'EXTERNAL_ASC'
  | 'EXTERNAL_DESC'
  | 'STARTED_AT_ASC'
  | 'STARTED_AT_DESC'
  | 'ENDED_AT_ASC'
  | 'ENDED_AT_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'PRIVATE_DESCRIPTION_ASC'
  | 'PRIVATE_DESCRIPTION_DESC'
  | 'SCORE_ASC'
  | 'SCORE_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyTreatmentFilesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CASE_STUDY_TREATMENT_ID_ASC'
  | 'CASE_STUDY_TREATMENT_ID_DESC'
  | 'FILE_ID_ASC'
  | 'FILE_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyConclusionFilesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CASE_STUDY_CONCLUSION_ID_ASC'
  | 'CASE_STUDY_CONCLUSION_ID_DESC'
  | 'FILE_ID_ASC'
  | 'FILE_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyConclusionType =
  | 'TREATMENT_COMPLETION'
  | 'CANCELLATION_BY_CLIENT'
  | 'CANCELLATION_BY_PARENT'
  | 'FURTHER_REFERRAL' 

export type EventsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'CLIENT_ID_ASC'
  | 'CLIENT_ID_DESC'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'CASE_STUDY_TREATMENT_ID_ASC'
  | 'CASE_STUDY_TREATMENT_ID_DESC'
  | 'CASE_STUDY_CONCLUSION_ID_ASC'
  | 'CASE_STUDY_CONCLUSION_ID_DESC'
  | 'FORM_RESPONSE_ID_ASC'
  | 'FORM_RESPONSE_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type EventType =
  | 'CREATE_CLIENT'
  | 'CREATE_CASE_STUDY'
  | 'CREATE_CASE_STUDY_TREATMENT'
  | 'CONCLUDE_CASE_STUDY'
  | 'FORM_RESPONSE' 

export type FormQuestionsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'FORM_ID_ASC'
  | 'FORM_ID_DESC'
  | 'INDEX_ASC'
  | 'INDEX_DESC'
  | 'REQUIRED_ASC'
  | 'REQUIRED_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'OPTIONS_ASC'
  | 'OPTIONS_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type FormQuestionType =
  | 'SHORT_ANSWER'
  | 'PARAGRAPH'
  | 'MULTIPLE_CHOICE'
  | 'CHECKBOXES'
  | 'DROPDOWN'
  | 'DATE'
  | 'DATE_TIME'
  | 'TIME' 

export type FormResponseAnswersOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'FORM_RESPONSE_ID_ASC'
  | 'FORM_RESPONSE_ID_DESC'
  | 'FORM_QUESTION_ID_ASC'
  | 'FORM_QUESTION_ID_DESC'
  | 'VALUE_ASC'
  | 'VALUE_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type FormResponsesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'FORM_ID_ASC'
  | 'FORM_ID_DESC'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type FormResponseFilesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'FORM_RESPONSE_ID_ASC'
  | 'FORM_RESPONSE_ID_DESC'
  | 'FILE_ID_ASC'
  | 'FILE_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type CaseStudyConclusionsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'CASE_STUDY_ID_ASC'
  | 'CASE_STUDY_ID_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'PRIVATE_DESCRIPTION_ASC'
  | 'PRIVATE_DESCRIPTION_DESC'
  | 'CONCLUDED_AT_ASC'
  | 'CONCLUDED_AT_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type TherapistsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'USER_ID_ASC'
  | 'USER_ID_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'TELEPHONE_ASC'
  | 'TELEPHONE_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'FIRST_NAME_ASC'
  | 'FIRST_NAME_DESC'
  | 'LAST_NAME_ASC'
  | 'LAST_NAME_DESC'
  | 'DATE_OF_BIRTH_ASC'
  | 'DATE_OF_BIRTH_DESC'
  | 'GENDER_ASC'
  | 'GENDER_DESC'
  | 'DISABLED_ASC'
  | 'DISABLED_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type FilesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'PROTECTED_ASC'
  | 'PROTECTED_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type ClientsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NUMBER_ASC'
  | 'NUMBER_DESC'
  | 'FIRST_NAME_ASC'
  | 'FIRST_NAME_DESC'
  | 'LAST_NAME_ASC'
  | 'LAST_NAME_DESC'
  | 'DATE_OF_BIRTH_ASC'
  | 'DATE_OF_BIRTH_DESC'
  | 'TELEPHONE_ASC'
  | 'TELEPHONE_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'GENDER_ASC'
  | 'GENDER_DESC'
  | 'CITY_ASC'
  | 'CITY_DESC'
  | 'ADDRESS_ASC'
  | 'ADDRESS_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'UPDATED_BY_ASC'
  | 'UPDATED_BY_DESC'
  | 'DISCRETE_ASC'
  | 'DISCRETE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type FormsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'ENABLED_ASC'
  | 'ENABLED_DESC'
  | 'CREATED_BY_ASC'
  | 'CREATED_BY_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 

export type UsersOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC' 