SagepointPortal.Store = DS.Store.extend();
SagepointPortal.ApplicationAdapter = DS.FixtureAdapter;
SagepointPortal.RESTAdapter = DS.RESTAdapter;

SagepointPortal.RESTAdapter.reopen({
	host: SagepointPortal.api_base,
	namespace: SagepointPortal.api_version
});