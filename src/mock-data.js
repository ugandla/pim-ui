export default [
  {
    id: "2059",
    TaskId: "2059",
    PatientId: "40723",
    Description: "TASK EDITED",
    PatientEMRN: "ZZZTW01",
    TaskOwner: "10123",
    TaskAction: "Med Renewal Request",
    TaskOwnerName: "Medicine, James",
    TaskCreatedDTTM: "2022-12-11T11:28:30.9929745Z",
    TaskStatus: "Active",
    HasCommentFlag: "Y",
    PatientName: "Patient - 2058",
    Transid: "264741",
    TaskCreatorName: "Medicine, James",
    TaskComment:
      "Good Morning, Marry needs prescription for her torsemide. she have only supply for week. Thank you very much",
    CdoId: "cdo1",
    ProviderId: "Appolo",
    AggregatoreTime: null,
    Steps: [
      {
        CurrentStep: "Raw Add",
        TimeStamp: "2022-12-20T14:01:43.672261Z",
      },
      {
        CurrentStep: "NLP Process",
        TimeStamp: "2022-12-20T14:02:09.401386Z",
      },
      {
        CurrentStep: "RulesEngineExecuted",
        TimeStamp: "2023-01-11T15:06:31.0589346Z",
      },
      {
        CurrentStep: "RecommendationSent",
        TimeStamp: "2023-01-11T15:06:31.0843112Z",
      },
    ],
    isMedicineRefill: true,
    MedicineEntities: [
      {
        MedicineName: "torsemide 5 MG Oral Tablet",
        MedicineCategory: "Diuretics",
        DataSources: [
          {
            entityId: "C0040805",
            name: "UMLS",
          },
          {
            entityId: "0000020759",
            name: "AOD",
          },
          {
            entityId: "N06AX05",
            name: "ATC",
          },
          {
            entityId: "0035767",
            name: "CCPSS",
          },
          {
            entityId: "0000012498",
            name: "CHV",
          },
          {
            entityId: "DB00656",
            name: "DRUGBANK",
          },
          {
            entityId: "4271",
            name: "GS",
          },
          {
            entityId: "MTHU060475",
            name: "LNC",
          },
          {
            entityId: "340490",
            name: "MEDCIN",
          },
          {
            entityId: "d00395",
            name: "MMSL",
          },
          {
            entityId: "D014196",
            name: "MSH",
          },
          {
            entityId: "YBK48BXK30",
            name: "MTHSPL",
          },
          {
            entityId: "C29510",
            name: "NCI",
          },
          {
            entityId: "YBK48BXK30",
            name: "NCI_FDA",
          },
          {
            entityId: "004610",
            name: "NDDF",
          },
          {
            entityId: "54152",
            name: "PSY",
          },
          {
            entityId: "x01B2",
            name: "RCD",
          },
          {
            entityId: "10737",
            name: "RXNORM",
          },
          {
            entityId: "C-622F0",
            name: "SNMI",
          },
          {
            entityId: "372829000",
            name: "SNOMEDCT_US",
          },
          {
            entityId: "4019954",
            name: "VANDF",
          },
        ],
        RuleActionOutput: {
          IsRulesSucceeded: "true",
          RefillDuration: 180,
          Suggestions: "Refill for 6 months",
          DelegateUsername: null,
          CriteriaSatisfied: true,
          CriteriaPassed:
            "Patient has seen provider within last 12 months\nPatient is under age 40\n",
          CriteriaFailed:
            "Patient hasn't had mammogram screening within last 12 months\n",
          supportData: {
            procedures: [],
            encounters: [
              {
                code: "390906007",
                datetime: "2022-07-18T20:26:06+00:00",
                status: true
              },
            ],
            age: {
              value: "28",
              status: true
            },
          },
        },
      },
    ],
    _rid: "fFxEAKBVLkeBhB4AAAAAAA==",
    _self: "dbs/fFxEAA==/colls/fFxEAKBVLkc=/docs/fFxEAKBVLkeBhB4AAAAAAA==/",
    _etag: '"0000ffac-0000-0300-0000-63bed0770000"',
    _attachments: "attachments/",
    _ts: 1673449591,
  },
  {
    id: "266317",
    TaskId: "266317",
    PatientId: "40716",
    Description: "TASK EDITED",
    PatientEMRN: "ZZZTW01",
    TaskOwner: "10123",
    TaskAction: "Med Renewal Request",
    TaskOwnerName: "Medicine, James",
    TaskCreatedDTTM: "2022-12-11T11:28:30.9929745Z",
    TaskStatus: "Active",
    HasCommentFlag: "Y",
    PatientName: "Patient - 2058",
    Transid: "266317",
    TaskCreatorName: "Medicine, James",
    TaskComment:
      "Donna needs prescription for her OralContraceptives Pills. she have only supply for week. Thank you very much",
    CdoId: "cdo1",
    ProviderId: "Appolo",
    AggregatoreTime: null,
    Steps: [
      {
        CurrentStep: "Raw Add",
        TimeStamp: "2022-12-20T14:01:43.672261Z",
      },
      {
        CurrentStep: "NLP Process",
        TimeStamp: "2022-12-20T14:02:09.401386Z",
      },
      {
        CurrentStep: "RulesEngineExecuted",
        TimeStamp: "2023-01-11T15:04:22.4345425Z",
      },
      {
        CurrentStep: "RecommendationSent",
        TimeStamp: "2023-01-11T15:04:22.5025836Z",
      },
    ],
    isMedicineRefill: true,
    MedicineEntities: [
      {
        MedicineName: "",
        MedicineCategory: "OralContraceptives",
        DataSources: [
          {
            entityId: "C0040805",
            name: "UMLS",
          },
          {
            entityId: "0000020759",
            name: "AOD",
          },
          {
            entityId: "N06AX05",
            name: "ATC",
          },
          {
            entityId: "0035767",
            name: "CCPSS",
          },
          {
            entityId: "0000012498",
            name: "CHV",
          },
          {
            entityId: "DB00656",
            name: "DRUGBANK",
          },
          {
            entityId: "4271",
            name: "GS",
          },
          {
            entityId: "MTHU060475",
            name: "LNC",
          },
          {
            entityId: "340490",
            name: "MEDCIN",
          },
          {
            entityId: "d00395",
            name: "MMSL",
          },
          {
            entityId: "D014196",
            name: "MSH",
          },
          {
            entityId: "YBK48BXK30",
            name: "MTHSPL",
          },
          {
            entityId: "C29510",
            name: "NCI",
          },
          {
            entityId: "YBK48BXK30",
            name: "NCI_FDA",
          },
          {
            entityId: "004610",
            name: "NDDF",
          },
          {
            entityId: "54152",
            name: "PSY",
          },
          {
            entityId: "x01B2",
            name: "RCD",
          },
          {
            entityId: "10737",
            name: "RXNORM",
          },
          {
            entityId: "C-622F0",
            name: "SNMI",
          },
          {
            entityId: "372829000",
            name: "SNOMEDCT_US",
          },
          {
            entityId: "4019954",
            name: "VANDF",
          },
        ],
        RuleActionOutput: {
          IsRulesSucceeded: "true",
          RefillDuration: 180,
          Suggestions: "Refill for 6 months",
          DelegateUsername: null,
          CriteriaSatisfied: true,
          CriteriaPassed:
            "Patient has seen provider within last 12 months\nPatient has had potassium test within last 6 months\n",
          CriteriaFailed:
            "Patient hasn't had sodium test within last 6 months\n",
          supportData: {
            procedures: [
              {
                code: "75940-7",
                datetime: "2022-10-09T22:57:15",
                status: true,
              },
              {
                code: "2947-0",
                datetime: "NA",
                status: false,
              },
            ],
            encounters: [
              {
                code: "390906007",
                datetime: "2022-08-20T20:26:06+00:00",
                status: true,
              },
            ],
            age: {
              value: "36",
              status: true
            }
          },
        },
      },
    ],
    _rid: "fFxEAKBVLkeDhB4AAAAAAA==",
    _self: "dbs/fFxEAA==/colls/fFxEAKBVLkc=/docs/fFxEAKBVLkeDhB4AAAAAAA==/",
    _etag: '"000078ac-0000-0300-0000-63becff60000"',
    _attachments: "attachments/",
    _ts: 1673449462,
  },
];
