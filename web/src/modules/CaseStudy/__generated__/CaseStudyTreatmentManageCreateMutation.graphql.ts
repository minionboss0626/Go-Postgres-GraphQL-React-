/**
 * @generated SignedSource<<829384e10d0a42892f4c7e836dbd5ed6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyTreatmentInput = {
  clientMutationId?: string | null;
  caseStudyRowId: string;
  external: boolean;
  startedAt: string;
  endedAt: string;
  title: string;
  description?: string | null;
  privateDescription?: string | null;
  score?: number | null;
};
export type CaseStudyTreatmentManageCreateMutation$variables = {
  input: CreateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageCreateMutation$data = {
  readonly createCaseStudyTreatment: {
    readonly treatment: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly rowId: string;
        readonly clientRowId: string | null;
        readonly client: {
          readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client" | "ClientsTable_client">;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"ClientsCaseStudiesDetailsPage_caseStudy" | "CaseStudyTreatmentManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
    } | null;
  } | null;
};
export type CaseStudyTreatmentManageCreateMutation = {
  variables: CaseStudyTreatmentManageCreateMutation$variables;
  response: CaseStudyTreatmentManageCreateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientRowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concluded",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v8 = {
  "alias": "conclusion",
  "args": null,
  "concreteType": "CaseStudyConclusion",
  "kind": "LinkedField",
  "name": "caseStudyConclusionByCaseStudyRowId",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startedAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endedAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "EventsConnection",
  "kind": "LinkedField",
  "name": "sortedEvents",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Event",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v4/*: any*/),
        (v7/*: any*/),
        (v3/*: any*/),
        {
          "alias": "caseStudy",
          "args": null,
          "concreteType": "CaseStudy",
          "kind": "LinkedField",
          "name": "caseStudyByCaseStudyRowId",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v5/*: any*/),
            (v9/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": "formResponse",
          "args": null,
          "concreteType": "FormResponse",
          "kind": "LinkedField",
          "name": "formResponseByFormResponseRowId",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": "form",
              "args": null,
              "concreteType": "Form",
              "kind": "LinkedField",
              "name": "formByFormRowId",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                (v4/*: any*/)
              ],
              "storageKey": null
            },
            (v9/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": "treatment",
          "args": null,
          "concreteType": "CaseStudyTreatment",
          "kind": "LinkedField",
          "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v5/*: any*/),
            (v10/*: any*/),
            (v11/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": "conclusion",
          "args": null,
          "concreteType": "CaseStudyConclusion",
          "kind": "LinkedField",
          "name": "caseStudyConclusionByCaseStudyConclusionRowId",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v7/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "concludedAt",
              "storageKey": null
            },
            (v4/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "RequiredField",
                "field": {
                  "alias": "caseStudy",
                  "args": null,
                  "concreteType": "CaseStudy",
                  "kind": "LinkedField",
                  "name": "caseStudyByCaseStudyRowId",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
                    (v3/*: any*/),
                    {
                      "alias": "client",
                      "args": null,
                      "concreteType": "Client",
                      "kind": "LinkedField",
                      "name": "clientByClientRowId",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "ClientCaseStudies_client"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "ClientsTable_client"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ClientsCaseStudiesDetailsPage_caseStudy"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyTreatmentManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "createCaseStudyTreatment.treatment.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_treatment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyTreatmentManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "caseStudy",
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": "client",
                    "args": null,
                    "concreteType": "Client",
                    "kind": "LinkedField",
                    "name": "clientByClientRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": "caseStudies",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "orderBy",
                            "value": [
                              "CREATED_AT_DESC"
                            ]
                          }
                        ],
                        "concreteType": "CaseStudiesConnection",
                        "kind": "LinkedField",
                        "name": "caseStudiesByClientRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudy",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v4/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v8/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "number",
                        "storageKey": null
                      },
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ClientAssignedTherapist",
                        "kind": "LinkedField",
                        "name": "latestAssignedTherapist",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "therapist",
                            "args": null,
                            "concreteType": "Therapist",
                            "kind": "LinkedField",
                            "name": "therapistByTherapistRowId",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v13/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": "treatments",
                        "args": null,
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": "assignedTherapists",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": [
                          "CREATED_AT_ASC"
                        ]
                      }
                    ],
                    "concreteType": "CaseStudyTherapistsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyTherapistsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyTherapist",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "primary",
                            "storageKey": null
                          },
                          {
                            "alias": "therapist",
                            "args": null,
                            "concreteType": "Therapist",
                            "kind": "LinkedField",
                            "name": "therapistByTherapistRowId",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v7/*: any*/),
                              (v13/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ClientExtension",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__id",
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": "caseStudyTherapistsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
                  },
                  (v12/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "external",
                "storageKey": null
              },
              (v5/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "privateDescription",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "score",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "082d6e3eb4b80a40242d314143f3d40d",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageCreateMutation(\n  $input: CreateCaseStudyTreatmentInput!\n) {\n  createCaseStudyTreatment(input: $input) {\n    treatment: caseStudyTreatment {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        rowId\n        clientRowId\n        client: clientByClientRowId {\n          ...ClientCaseStudies_client\n          ...ClientsTable_client\n          id\n        }\n        ...ClientsCaseStudiesDetailsPage_caseStudy\n        ...CaseStudyTreatmentManage_caseStudy\n        id\n      }\n      ...CaseStudyTreatmentManage_treatment\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n    nodes {\n      id\n      rowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      sortedEvents {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment ClientsTable_client on Client {\n  rowId\n  number\n  fullName\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      rowId\n      fullName\n      id\n    }\n    id\n  }\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "82cb8db87477e4707947338898bd0d47";
}

export default node;
