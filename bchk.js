try {
  const keyList = [
    'AppBannerPromptResult',
    'webkitRTCPeerConnection',
    'webkitAudioContext',
    'webkitRequestAnimationFrame',
    'chrome.runtime',
    'chrome.webstore',
    'console.context',
    'InputMethodContext',
    'SVGAnimationElement',
    'SVGPathSegList',
    'PasswordCredential',
    'ViewTransition',
    'VisualViewport.prototype.segments',
    'DeprecationReportBody',
    'MathMLElement',
    'opr',
    'CSS2Properties.prototype.colorScheme',
    'WebKitCSSMatrix',
    'SVGTextPositioningElement',
    'XMLHttpRequestEventTarget',
    'TextDecoderStream',
    'onloadend',
    'WritableStream',
    'TransformStream',
    'TextTrackCue',
    'WeakRef',
    'VisualViewport',
    'StyleSheet',
    'RTCDtlsTransport',
    'Atomics',
    'StaticRange',
    'UIEvent',
    'VideoStreamTrack',
    'OfflineResourceList',
    'SVGGeometryElement',
    'RTCDataChannel',
    'VTTRegion',
    'AbortController',
    'Controllers',
    'onanimationcancel',
    'SVGDocument',
    'IIRFilterNode',
    'RTCStatsReport',
    'MediaStreamTrack',
    'CSS2Properties.prototype.MozOsxFontSmoothing',
    'CropTarget',
    'BatteryManager',
    'LaunchQueue',
    'CSSFontPaletteValuesRule',
    'PushSubscriptionOptions',
    'DOMSettableTokenList',
    'RTCTrackEvent',
    'MozSmsMessage',
    'ServiceWorkerContainer',
    'CanvasCaptureMediaStream',
    'DeviceStorage',
    'XPathNSResolver',
    'SmartCardEvent',
    'WeakSet',
    'MozMobileMessageManager',
    'External.prototype.getHostEnvironmentValue',
    'WindowUtils',
    'XPathNamespace',
    'SVGFEDropShadowElement',
    'SharedWorker',
    'WorkerMessageEvent',
    'CSS2Properties.prototype.MozOSXFontSmoothing',
    'AudioSinkInfo',
    'Notification.prototype.image',
    'ContentVisibilityAutoStateChangeEvent',
    'PerformanceResourceTiming.prototype.renderBlockingStatus',
    'console.createTask',
    'PerformanceServerTiming',
    'CanvasFilter',
    'structuredClone',
    'onslotchange',
    'EyeDropper',
    'URLPattern',
    'VideoFrame',
    'WritableStreamDefaultController',
    'SharedArrayBuffer',
    'CSSCounterStyleRule',
    'CustomStateSet',
    'ReadableStreamDefaultController',
    'XMLDocument.prototype.hasStorageAccess',
    'CryptoKey',
    'SubmitEvent',
    'MediaMetadata',
    'VideoPlaybackQuality',
    'ReadableStreamDefaultReader',
    'UserActivation',
    'FragmentDirective',
    'WebKitMediaKeyError',
    'RTCRtpTransceiver.prototype.stop',
    'Scheduling',
    'EventCounts',
    'VideoTrackList',
    'SourceBuffer',
    'RTCError',
    'FontFaceSet',
    'CSSCharsetRule',
    'MediaDeviceInfo',
    'RTCPeerConnectionIceErrorEvent',
    'RTCSctpTransport',
    'MediaSessionCoordinator',
    'XULPopupElement',
    'MediaSourceHandle',
    'RTCEncodedAudioFrame',
    '__REACT_DEVTOOLS_GLOBAL_HOOK__',
    'ShadowRealm',
    'HTMLSlotElement',
    'DetachedViewControlEvent',
    'GeolocationPosition',
    'SiteBoundCredential',
    'MediaSource',
    'WebTransport',
    'GPUSupportedLimits',
    'ToggleEvent'
  ]
  let output = ''
  for (let x = 0; x < keyList.length; x++) {
    const key = keyList[x].split('.')
    let S = window
    let foundKey = true

    for (let y = 0; y < key.length; y++) {
      var keyWord = key[y]
      if (!(keyWord in S)) {
        foundKey = false
        break
      }
      y < key.length - 1 && (S = S[keyWord])
    }

    output += !foundKey
      ? '3829ae9642df0d791e41d2159da28bd18d056afadf1bd70fc9222a473eaf58e860ff950e7bf35b66e4aa90b156c80c96913dbd9c23c7262e4adbc3ddd77ff263'[
          x
        ]
      : '52738db37a1ea50137e79e8181193ac872cd325ba5cacfbe7aab5b36b9c9879e7c0018dbd31a1832a8dc6528387b67451719dcd8b784a518904e3f07c69b9d30'[
          x
        ]
  }
  console.log(output)
} catch (r) {
  console.log('Err:' + message)
}

addSignal('bchk', output)
