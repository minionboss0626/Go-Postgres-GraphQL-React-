/**
 * @generated SignedSource<<3e857b86f450c6dadfed240cc7e6d8af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManage_caseStudy$data = {
  readonly rowId: string;
  readonly title: string;
  readonly client: {
    readonly rowId: string;
    readonly fullName: string;
  };
  readonly " $fragmentType": "CaseStudyTreatmentManage_caseStudy";
};
export type CaseStudyTreatmentManage_caseStudy$key = {
  readonly " $data"?: CaseStudyTreatmentManage_caseStudy$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyTreatmentManage_caseStudy",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "client",
        "args": null,
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByClientRowId",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "client"
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "d9e15b64df6d76537528edb5aeb9c67e";
}

export default node;
