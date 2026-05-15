<?php
declare(strict_types=1);

// Microlink SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MicrolinkUtility::setRegistrar(function (MicrolinkUtility $u): void {
    $u->clean = [MicrolinkClean::class, 'call'];
    $u->done = [MicrolinkDone::class, 'call'];
    $u->make_error = [MicrolinkMakeError::class, 'call'];
    $u->feature_add = [MicrolinkFeatureAdd::class, 'call'];
    $u->feature_hook = [MicrolinkFeatureHook::class, 'call'];
    $u->feature_init = [MicrolinkFeatureInit::class, 'call'];
    $u->fetcher = [MicrolinkFetcher::class, 'call'];
    $u->make_fetch_def = [MicrolinkMakeFetchDef::class, 'call'];
    $u->make_context = [MicrolinkMakeContext::class, 'call'];
    $u->make_options = [MicrolinkMakeOptions::class, 'call'];
    $u->make_request = [MicrolinkMakeRequest::class, 'call'];
    $u->make_response = [MicrolinkMakeResponse::class, 'call'];
    $u->make_result = [MicrolinkMakeResult::class, 'call'];
    $u->make_point = [MicrolinkMakePoint::class, 'call'];
    $u->make_spec = [MicrolinkMakeSpec::class, 'call'];
    $u->make_url = [MicrolinkMakeUrl::class, 'call'];
    $u->param = [MicrolinkParam::class, 'call'];
    $u->prepare_auth = [MicrolinkPrepareAuth::class, 'call'];
    $u->prepare_body = [MicrolinkPrepareBody::class, 'call'];
    $u->prepare_headers = [MicrolinkPrepareHeaders::class, 'call'];
    $u->prepare_method = [MicrolinkPrepareMethod::class, 'call'];
    $u->prepare_params = [MicrolinkPrepareParams::class, 'call'];
    $u->prepare_path = [MicrolinkPreparePath::class, 'call'];
    $u->prepare_query = [MicrolinkPrepareQuery::class, 'call'];
    $u->result_basic = [MicrolinkResultBasic::class, 'call'];
    $u->result_body = [MicrolinkResultBody::class, 'call'];
    $u->result_headers = [MicrolinkResultHeaders::class, 'call'];
    $u->transform_request = [MicrolinkTransformRequest::class, 'call'];
    $u->transform_response = [MicrolinkTransformResponse::class, 'call'];
});
