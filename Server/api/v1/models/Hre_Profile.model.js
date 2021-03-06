const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hre_ProfileSchema = new Schema({
  ID: { type: Schema.Types.String },
  ProfileName: { type: Schema.Types.String },
  NameFamily: { type: Schema.Types.String },
  FirstName: { type: Schema.Types.String },
  NameEnglish: { type: Schema.Types.String },
  ImagePath: { type: Schema.Types.String },
  CodeEmp: { type: Schema.Types.String },
  CodeTax: { type: Schema.Types.String },
  CodeAttendance: { type: Schema.Types.String },
  StatusSyn: { type: Schema.Types.String },
  DateHire: { type: Schema.Types.String },
  DateEndProbation: { type: Schema.Types.String },
  DateQuit: { type: Schema.Types.String },
  ResignDescription: { type: Schema.Types.String },
  CandidateID: { type: Schema.Types.String },
  WorkGroupID: { type: Schema.Types.String },
  OrgStructureID: { type: Schema.Types.String },
  PositionID: { type: Schema.Types.String },
  DateOfEffect: { type: Schema.Types.String },
  CostCentreID: { type: Schema.Types.String },
  LaborType: { type: Schema.Types.String },
  WorkingPlace: { type: Schema.Types.String },
  Supervisor: { type: Schema.Types.String },
  SocialInsOldNo: { type: Schema.Types.String },
  SocialInsNo: { type: Schema.Types.String },
  SocialInsDateReg: { type: Schema.Types.String },
  SocialInsIssueDate: { type: Schema.Types.String },
  SocialInsIssuePlace: { type: Schema.Types.String },
  HealthInsNo: { type: Schema.Types.String },
  HealthInsIssueDate: { type: Schema.Types.String },
  HealthInsExpiredDate: { type: Schema.Types.String },
  HealthInsIssuePlace: { type: Schema.Types.String },
  HealthTreatmentPlace: { type: Schema.Types.String },
  HealthTreatmentProvince: { type: Schema.Types.String },
  Gender: { type: Schema.Types.String },
  DateOfBirth: { type: Schema.Types.String },
  PlaceOfBirth: { type: Schema.Types.String },
  NationalityID: { type: Schema.Types.String },
  EthnicID: { type: Schema.Types.String },
  ReligionID: { type: Schema.Types.String },
  BloodType: { type: Schema.Types.String },
  Height: { type: Schema.Types.String },
  Weight: { type: Schema.Types.String },
  IDNo: { type: Schema.Types.String },
  IDDateOfIssue: { type: Schema.Types.String },
  IDPlaceOfIssue: { type: Schema.Types.String },
  PassportNo: { type: Schema.Types.String },
  PassportDateOfExpiry: { type: Schema.Types.String },
  PassportDateOfIssue: { type: Schema.Types.String },
  PassportPlaceOfIssue: { type: Schema.Types.String },
  Email: { type: Schema.Types.String },
  Email2: { type: Schema.Types.String },
  Cellphone: { type: Schema.Types.String },
  HomePhone: { type: Schema.Types.String },
  BusinessPhone: { type: Schema.Types.String },
  PAStreet: { type: Schema.Types.String },
  PADistrictID: { type: Schema.Types.String },
  PACityID: { type: Schema.Types.String },
  TAStreet: { type: Schema.Types.String },
  TADistrictID: { type: Schema.Types.String },
  TACityID: { type: Schema.Types.String },
  StatusVerify: { type: Schema.Types.String },
  JobTitleID: { type: Schema.Types.String },
  TagID: { type: Schema.Types.String },
  LabourNo: { type: Schema.Types.String },
  LabourIssueDate: { type: Schema.Types.String },
  PayrollGroupID: { type: Schema.Types.String },
  LaborBookNo: { type: Schema.Types.String },
  LaborBookIssueDate: { type: Schema.Types.String },
  RequestDate: { type: Schema.Types.String },
  EmpTypeID: { type: Schema.Types.String },
  EducationLevelID: { type: Schema.Types.String },
  ResReasonID: { type: Schema.Types.String },
  MarriageStatus: { type: Schema.Types.String },
  ResignNo: { type: Schema.Types.String },
  Forte: { type: Schema.Types.String },
  TrainingSkill: { type: Schema.Types.String },
  PromotionCondition: { type: Schema.Types.String },
  PromotionRequest: { type: Schema.Types.String },
  DeadLineApprove: { type: Schema.Types.String },
  Notes2: { type: Schema.Types.String },
  Origin: { type: Schema.Types.String },
  ContactName1: { type: Schema.Types.String },
  ContactName2: { type: Schema.Types.String },
  ContactRelation1: { type: Schema.Types.String },
  ContactRelation2: { type: Schema.Types.String },
  ContactPhone1: { type: Schema.Types.String },
  ContactPhone2: { type: Schema.Types.String },
  ContactAddress1: { type: Schema.Types.String },
  ContactAddress2: { type: Schema.Types.String },
  ServerUpdate: { type: Schema.Types.String },
  ServerCreate: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.String },
  DateUpdate: { type: Schema.Types.String },
  UserLockID: { type: Schema.Types.String },
  DateLock: { type: Schema.Types.String },
  IsDelete: { type: Schema.Types.String },
  IPCreate: { type: Schema.Types.String },
  IPUpdate: { type: Schema.Types.String },
  biography: { type: Schema.Types.String },
  Notes: { type: Schema.Types.String },
  JobTitlePotentinalID: { type: Schema.Types.String },
  DateFrom: { type: Schema.Types.String },
  DateTo: { type: Schema.Types.String },
  LabourBookPlaceOfIssue: { type: Schema.Types.String },
  Smoke: { type: Schema.Types.String },
  TypeOfVehicle: { type: Schema.Types.String },
  DrivingLisenceNo: { type: Schema.Types.String },
  StoredDocuments: { type: Schema.Types.String },
  LockerID: { type: Schema.Types.String },
  UnEmpInsNo: { type: Schema.Types.String },
  UnEmpInsDateReg: { type: Schema.Types.String },
  UnEmpInsPlace: { type: Schema.Types.String },
  ReceiveUnEmp: { type: Schema.Types.String },
  ReceiveSocialIns: { type: Schema.Types.String },
  ReceiveSocialInsDate: { type: Schema.Types.String },
  FileStore: { type: Schema.Types.String },
  FileAttach: { type: Schema.Types.String },
  HealthTreatmentPlaceCode: { type: Schema.Types.String },
  DayOfBirth: { type: Schema.Types.String },
  MonthOfBirth: { type: Schema.Types.String },
  YearOfBirth: { type: Schema.Types.String },
  IsBlackList: { type: Schema.Types.String },
  HighSupervisor: { type: Schema.Types.String },
  Notes3: { type: Schema.Types.String },
  IsDrivingLisence: { type: Schema.Types.String },
  ProbExtendDays: { type: Schema.Types.String },
  IsHeadDept: { type: Schema.Types.String },
  IsInsFollowUp: { type: Schema.Types.String },
  CommentIns: { type: Schema.Types.String },
  ReceiveHealthIns: { type: Schema.Types.String },
  ReceiveHealthInsDate: { type: Schema.Types.String },
  UnEmpInsCountMonthOld: { type: Schema.Types.String },
  Specialization: { type: Schema.Types.String },
  ProbExtendDate: { type: Schema.Types.String },
  SocialInsSubmitBookDate: { type: Schema.Types.String },
  SocialInsSubmitBookStatus: { type: Schema.Types.String },
  PasswordPaySlip: { type: Schema.Types.String },
  WorkPermitStatus: { type: Schema.Types.String },
  WorkPermitNo: { type: Schema.Types.String },
  WorkPermitInsDate: { type: Schema.Types.String },
  WorkPermitExpiredDate: { type: Schema.Types.String },
  DateOfIssuedTaxCode: { type: Schema.Types.String },
  DateQuitSign: { type: Schema.Types.String },
  LocationCode: { type: Schema.Types.String },
  SupervisorID: { type: Schema.Types.String },
  HighSupervisorID: { type: Schema.Types.String },
  WorkPlaceID: { type: Schema.Types.String },
  PasswordPaySliptDefault: { type: Schema.Types.String },
  SikillLevel: { type: Schema.Types.String },
  DateApplyAttendanceCode: { type: Schema.Types.String },
  FormType: { type: Schema.Types.String },
  PlaceOfIssueID: { type: Schema.Types.String },
  ResonBackList: { type: Schema.Types.String },
  DatePrepare: { type: Schema.Types.String },
  PlaceOfBirthID: { type: Schema.Types.String },
  OrgLineDefaultID: { type: Schema.Types.String },
  ProducteLineDefaultID: { type: Schema.Types.String },
  ProvinceInsuranceID: { type: Schema.Types.String },
  DateQuitRequest: { type: Schema.Types.String },
  ProfileSign: { type: Schema.Types.String },
  AddressEmergency: { type: Schema.Types.String },
  PassportPlaceID: { type: Schema.Types.String },
  VillageID: { type: Schema.Types.String },
  TAVillageID: { type: Schema.Types.String },
  Order: { type: Schema.Types.String },
  MarkColor: { type: Schema.Types.String },
  IsExistentConcurrentPosition: { type: Schema.Types.String },
  PositionRate: { type: Schema.Types.String },
  PAddressID: { type: Schema.Types.String },
  TAddressID: { type: Schema.Types.String },
  IsRegisterSocialIns: { type: Schema.Types.String },
  IsRegisterHealthIns: { type: Schema.Types.String },
  IsRegisterUnEmploymentIns: { type: Schema.Types.String },
  GraduatedLevelID: { type: Schema.Types.String },
  ShopID: { type: Schema.Types.String },
  TCountryID: { type: Schema.Types.String },
  TProvinceID: { type: Schema.Types.String },
  TDistrictID: { type: Schema.Types.String },
  TAddress: { type: Schema.Types.String },
  PCountryID: { type: Schema.Types.String },
  PProvinceID: { type: Schema.Types.String },
  PDistrictID: { type: Schema.Types.String },
  PAddress: { type: Schema.Types.String },
  SalaryClassName: { type: Schema.Types.String },
  ReasonDeny: { type: Schema.Types.String },
  StatusHire: { type: Schema.Types.String },
  SalaryClassID: { type: Schema.Types.String },
  IsHoldSal: { type: Schema.Types.String },
  UserCreateID: { type: Schema.Types.String },
  TypeSuspense: { type: Schema.Types.String },
  MonthHoldSal: { type: Schema.Types.String },
  ContractTypeID: { type: Schema.Types.String },
  TypeOfStop: { type: Schema.Types.String },
  Settlement: { type: Schema.Types.String },
  MonnthSettlement: { type: Schema.Types.String },
  IsSettlement: { type: Schema.Types.String },
  RegionID: { type: Schema.Types.String },
  SocialInsPlaceID: { type: Schema.Types.String },
  TypeOfStopID: { type: Schema.Types.String },
  CodeEmpClient: { type: Schema.Types.String },
  CostSourceID: { type: Schema.Types.String },
  VehicleID: { type: Schema.Types.String },
  ShoeSize: { type: Schema.Types.String },
  StopWorkType: { type: Schema.Types.String },
  NameContactForEmergency: { type: Schema.Types.String },
  CellPhoneForEmergency: { type: Schema.Types.String },
  IsPeriodicExamination: { type: Schema.Types.String },
  AbilityTileID: { type: Schema.Types.String },
  IsTradeUnionist: { type: Schema.Types.String },
  TradeUnionistEnrolledDate: { type: Schema.Types.String },
  TradeUnionistPositionID: { type: Schema.Types.String },
  CoatSize: { type: Schema.Types.String },
  PantSize: { type: Schema.Types.String },
  TypeOfTransferID: { type: Schema.Types.String },
  MidSupervisorID: { type: Schema.Types.String },
  MiddleName: { type: Schema.Types.String },
  NationalityGroupID: { type: Schema.Types.String },
  EmployeeGroupID: { type: Schema.Types.String },
  AddressSecondaryEmergency: { type: Schema.Types.String },
  NameForSecondaryEmergency: { type: Schema.Types.String },
  CellPhoneForSecondaryEmergency: { type: Schema.Types.String },
  SubjectGroupID: { type: Schema.Types.String },
  SubjectID: { type: Schema.Types.String },
  CostActivityID: { type: Schema.Types.String },
  ProvinceHospital: { type: Schema.Types.String },
  EmploymentType: { type: Schema.Types.String },
  PositionID1: { type: Schema.Types.String },
  PositionID2: { type: Schema.Types.String },
  PositionID3: { type: Schema.Types.String },
  OldIDNo: { type: Schema.Types.String },
  IsTopPosition: { type: Schema.Types.String },
  CutOffDurationID: { type: Schema.Types.String },
  JobDescription: { type: Schema.Types.String },
  Permission: { type: Schema.Types.String },
  TaskLongTerm: { type: Schema.Types.String },
  TaskShortTerm: { type: Schema.Types.String },
  TaxDepartment: { type: Schema.Types.String },
  CompanyID: { type: Schema.Types.String },
  Email3: { type: Schema.Types.String },
  Email4: { type: Schema.Types.String },
  Relationship1: { type: Schema.Types.String },
  Relationship2: { type: Schema.Types.String },
  IsTalent: { type: Schema.Types.String },
  IsNotEnoughHealth: { type: Schema.Types.String },
  IDNoCountryID: { type: Schema.Types.String },
  IDNoProvinceID: { type: Schema.Types.String },
  IDNoDistrictID: { type: Schema.Types.String },
  IDNoAVillageID: { type: Schema.Types.String },
  IDNoAddress: { type: Schema.Types.String },
  SortID: { type: Schema.Types.String },
  PayrollCategoryID: { type: Schema.Types.String },
  TradeUnionistEndDate: { type: Schema.Types.String },
  DormitoryID: { type: Schema.Types.String },
  RootProfileID: { type: Schema.Types.String },
  SpecialAreaID: { type: Schema.Types.String },
  DatehireNew: { type: Schema.Types.String },
  UnitStructureID: { type: Schema.Types.String },
  IDCard: { type: Schema.Types.String },
  IDCardDateOfIssue: { type: Schema.Types.String },
  IDCardPlaceOfIssue: { type: Schema.Types.String },
  HealthTreatmentPlaceID: { type: Schema.Types.String },
  OtherReason: { type: Schema.Types.String },
  ProbationTime: { type: Schema.Types.String },
  ProbationTimeUnit: { type: Schema.Types.String },
  DateSenior: { type: Schema.Types.String },
  ReplaceForProfileID: { type: Schema.Types.String },
  ReplaceForReasonID: { type: Schema.Types.String },
  Career: { type: Schema.Types.String },
  StrongPoint: { type: Schema.Types.String },
  HealthStatus: { type: Schema.Types.String },
  Detention: { type: Schema.Types.String },
  JoinForeignOrganization: { type: Schema.Types.String },
  ForeignRelatives: { type: Schema.Types.String },
  SocialInsReserveDate: { type: Schema.Types.String },
  SocialInsDeliveryDate: { type: Schema.Types.String },
  SocialInsAppointmentDate: { type: Schema.Types.String },
  SocialInsNote: { type: Schema.Types.String },
  DateComeBack: { type: Schema.Types.String },
  UsualAllowanceGroupID: { type: Schema.Types.String },
  ProfileMoreInfoID: { type: Schema.Types.String },
  IsNotComputProductSalary: { type: Schema.Types.String },
  DayOfAnnualLeave: { type: Schema.Types.String },
  NoSendMailProbation: { type: Schema.Types.String },
  AreaPostJobWorkID: { type: Schema.Types.String },
  AreaPostJobID: { type: Schema.Types.String },
  Fingercode: { type: Schema.Types.String },
  IDCardCodeAtt: { type: Schema.Types.String },
  StatusItg: { type: Schema.Types.String },
});

Hre_ProfileSchema.virtual("Position", {
  ref: "Cat_Position",
  localField: "PositionID",
  foreignField: "ID",
  justOne: true,
});

Hre_ProfileSchema.virtual("OrgStructure", {
  ref: "Cat_OrgStructure",
  localField: "OrgStructureID",
  foreignField: "ID",
  justOne: true,
});

Hre_ProfileSchema.virtual("Unit", {
  ref: "Cat_OrgUnit",
  localField: "OrgStructureID",
  foreignField: "OrgStructureID",
  justOne: true,
});

Hre_ProfileSchema.virtual("ContractType", {
  ref: "Cat_ContractType",
  localField: "ContractTypeID",
  foreignField: "ID",
});

Hre_ProfileSchema.set("toObject", { virtuals: true });
Hre_ProfileSchema.set("toJSON", { virtuals: true });

const Hre_ProfileModel = mongoose.model("Hre_Profile", Hre_ProfileSchema);

module.exports = Hre_ProfileModel;
