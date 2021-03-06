/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */
import React, { useContext } from "react";
import { IdentificationContext } from "../../../../contexts/IdentificationContext";

const getNodeType = (key) => {
  // ******* TODO --> CLEAN THIS UP, HOOK SHOULD NOT BE USED HERE *************
  // eslint-disable-next-line
  const identificationContext = useContext(IdentificationContext);

  const nodeTypes = {
    project: {
      key: "project",
      plural: "projects",
      typeForCreate: "GlossaryProject",
      typeName: "Project",
      attributes: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "description",
          label: "Description",
        },
        {
          key: "qualifiedName",
          label: "Qualified Name",
        },
      ],
      summaryResponseAttributes: [
        {
          key: "guid",
          label: "Guid",
        },
      ],
    },
    term: {
      key: "term",
      plural: "terms",
      typeName: "Term",
      hasGlossary: true,
      attributes: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "description",
          label: "Description",
        },
        {
          key: "qualifiedName",
          label: "Qualified Name",
        },
        {
          key: "summary",
          label: "Summary",
        },
        {
          key: "abbreviation",
          label: "Abbreviation",
        },
        {
          key: "examples",
          label: "Examples",
        },
        {
          key: "usage",
          label: "Usage",
        },
      ],
      summaryResponseAttributes: [
        {
          key: "guid",
          label: "Guid",
        },
        {
          key: "glossaryGuid",
          label: "Glossary Guid",
        },
        {
          key: "glossaryName",
          label: "Glossary name",
        },
      ],
    },
    glossary: {
      key: "glossary",
      plural: "glossaries",
      typeName: "Glossary",
      attributes: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "description",
          label: "Description",
        },
        {
          key: "qualifiedName",
          label: "Qualified Name",
        },
      ],
      summaryResponseAttributes: [
        {
          key: "guid",
          label: "Guid",
        },
      ],
    },
    category: {
      key: "category",
      plural: "categories",
      typeName: "Category",
      hasGlossary: true,
      attributes: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "description",
          label: "Description",
        },
        {
          key: "qualifiedName",
          label: "Qualified Name",
        },
      ],
      summaryResponseAttributes: [
        {
          key: "guid",
          label: "Guid",
        },
        {
          key: "glossaryGuid",
          label: "Glossary Guid",
        },
        {
          key: "glossaryName",
          label: "Glossary name",
        },
      ],
    },
    notSet: {
      key: "undefined",
      plural: "undefined",
      typeName: "undefined",
    },
    error: {
      key: "error",
      plural: "error",
      typeName: "Error",
      attributes: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "description",
          label: "Description",
        },
        {
          key: "qualifiedName",
          label: "Qualified Name",
        },
      ],
    },
  };

  let nodeType = nodeTypes[key];
  if (nodeType) {
    nodeType.url =
      identificationContext.getRestURL("glossary-author") +
      "/" +
      nodeType.plural;
  } else {
    nodeType = nodeTypes["unSet"];
  }
  return nodeType;
};

export default getNodeType;
