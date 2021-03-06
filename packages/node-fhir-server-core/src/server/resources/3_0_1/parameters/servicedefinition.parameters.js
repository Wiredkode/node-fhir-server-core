/**
 * @name exports
 * @static
 * @summary Arguments for the servicedefinition query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ServiceDefinition.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-composed-of',
    description: 'What resource is being referenced',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ServiceDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-date',
    description: 'The service definition publication date',
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ServiceDefinition.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-depends-on',
    description: 'What resource is being referenced',
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ServiceDefinition.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-derived-from',
    description: 'What resource is being referenced',
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ServiceDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-description',
    description: 'The description of the service definition',
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ServiceDefinition.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-effective',
    description: 'The time during which the service definition is intended to be in use',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ServiceDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-identifier',
    description: 'External identifier for the service definition',
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ServiceDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-jurisdiction',
    description: 'Intended jurisdiction for the service definition',
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ServiceDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-name',
    description: 'Computationally friendly name of the service definition',
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ServiceDefinition.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-predecessor',
    description: 'What resource is being referenced',
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ServiceDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-publisher',
    description: 'Name of the publisher of the service definition',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ServiceDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-status',
    description: 'The current status of the service definition',
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ServiceDefinition.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-successor',
    description: 'What resource is being referenced',
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ServiceDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-title',
    description: 'The human-friendly name of the service definition',
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ServiceDefinition.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-topic',
    description: 'Topics associated with the module',
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'ServiceDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-url',
    description: 'The uri that identifies the service definition',
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ServiceDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/ServiceDefinition-version',
    description: 'The business version of the service definition',
  },
};
