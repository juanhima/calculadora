function calculadora(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.calculadora=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'calculadora', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  calculadora.__sendStats = sendStats;
  calculadora.__moduleName = 'calculadora';
  calculadora.__errFn = null;
  calculadora.__moduleBase = 'DUMMY';
  calculadora.__softPermutationId = 0;
  calculadora.__computePropValue = null;
  calculadora.__getPropMap = null;
  calculadora.__installRunAsyncCode = function(){
  }
  ;
  calculadora.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  calculadora.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  calculadora.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['calculadora'] = {moduleName:'calculadora'};
  calculadora.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules['calculadora'].bindings;
    activeModules['calculadora'].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[calculadora.__softPermutationId];
      for (var i = 0; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[0]] = pair[1];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'calculadora';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == 'CSS1Compat'?'<!doctype html>':'';
    frameDoc.write(doctype + '<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement('script');
      script.language = 'javascript';
      script.src = code_0;
      if (calculadora.__errFn) {
        script.onerror = function(){
          calculadora.__errFn('calculadora', new Error('Failed to load ' + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats('moduleStartup', 'scriptTagAdded');
    }

    sendStats('moduleStartup', 'moduleRequested');
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  calculadora.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  calculadora.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement('script');
    script.language = 'javascript';
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('calculadora::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_1, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_1 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_1 = '';
            }
            metaProps[name_1] = value_1;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    calculadora.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url_0 + 'clear.cache.gif';
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('calculadora.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return calculadora.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = 0;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers['gxt.device'] = function(){
      var agent = navigator.userAgent;
      if (agent.match(/Android/i)) {
        return 'tablet';
      }
       else if (agent.match(/BlackBerry/i)) {
        return 'tablet';
      }
       else if (agent.match(/iPhone|iPad|iPod/i)) {
        return 'tablet';
      }
       else if (agent.match(/IEMobile/i)) {
        return 'tablet';
      }
       else if (agent.match(/Tablet PC/i)) {
        return 'tablet';
      }
      return 'desktop';
    }
    ;
    values['gxt.device'] = {desktop:0, phone:1, tablet:2};
    providers['gxt.user.agent'] = function(){
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('edge/') != -1)
        return 'edge';
      if (ua.indexOf('chrome') != -1)
        return 'chrome';
      if (ua.indexOf('trident') != -1 || ua.indexOf('msie') != -1) {
        if ($doc_0.documentMode >= 11)
          return 'ie11';
        if ($doc_0.documentMode >= 10)
          return 'ie10';
        if ($doc_0.documentMode >= 9)
          return 'ie9';
        if ($doc_0.documentMode >= 8)
          return 'ie8';
        return 'ie10';
      }
      if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('version/3') != -1)
          return 'safari3';
        if (ua.indexOf('version/4') != -1)
          return 'safari4';
        return 'safari5';
      }
      if (ua.indexOf('gecko') != -1) {
        if (ua.indexOf('rv:1.8') != -1)
          return 'gecko1_8';
        return 'gecko1_9';
      }
      if (ua.indexOf('adobeair') != -1)
        return 'air';
      return null;
    }
    ;
    values['gxt.user.agent'] = {air:0, chrome:1, edge:2, gecko1_8:3, gecko1_9:4, ie10:5, ie11:6, ie8:7, ie9:8, safari3:9, safari4:10, safari5:11};
    providers['user.agent'] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var docMode = $doc_0.documentMode;
      if (function(){
        return ua.indexOf('webkit') != -1;
      }
      ())
        return 'safari';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
      }
      ())
        return 'ie10';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
      }
      ())
        return 'ie9';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
      }
      ())
        return 'ie8';
      if (function(){
        return ua.indexOf('gecko') != -1 || docMode >= 11;
      }
      ())
        return 'gecko1_8';
      return '';
    }
    ;
    values['user.agent'] = {gecko1_8:0, ie10:1, ie8:2, ie9:3, safari:4};
    providers['user.agent.os'] = function(){
      var ua = $wnd_0.navigator.userAgent.toLowerCase();
      if (ua.indexOf('macintosh') != -1 || ua.indexOf('mac os x') != -1) {
        return 'mac';
      }
      if (ua.indexOf('linux') != -1) {
        return 'linux';
      }
      if (ua.indexOf('windows') != -1 || ua.indexOf('win32') != -1) {
        return 'windows';
      }
      return 'unknown';
    }
    ;
    values['user.agent.os'] = {linux:0, mac:1, unknown:2, windows:3};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    calculadora.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    calculadora.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['calculadora'].bindings = calculadora.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('calculadora.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['desktop', 'air', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85');
      unflattenKeylistIntoAnswers(['desktop', 'air', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':1');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':10');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':100');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':101');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':102');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':103');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':104');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':105');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':106');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':107');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_8', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':108');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_8', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':109');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':11');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_8', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':110');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_8', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':111');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_9', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':112');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_9', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':113');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_9', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':114');
      unflattenKeylistIntoAnswers(['phone', 'gecko1_9', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':115');
      unflattenKeylistIntoAnswers(['phone', 'ie10', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':116');
      unflattenKeylistIntoAnswers(['phone', 'ie10', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':117');
      unflattenKeylistIntoAnswers(['phone', 'ie10', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':118');
      unflattenKeylistIntoAnswers(['phone', 'ie10', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':119');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':12');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':120');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':121');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':122');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':123');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':124');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':125');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':126');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':127');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':128');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':129');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':13');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':130');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':131');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':132');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':133');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':134');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':135');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':136');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':137');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':138');
      unflattenKeylistIntoAnswers(['phone', 'ie11', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':139');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':14');
      unflattenKeylistIntoAnswers(['phone', 'ie8', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':140');
      unflattenKeylistIntoAnswers(['phone', 'ie8', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':141');
      unflattenKeylistIntoAnswers(['phone', 'ie8', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':142');
      unflattenKeylistIntoAnswers(['phone', 'ie8', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':143');
      unflattenKeylistIntoAnswers(['phone', 'ie9', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':144');
      unflattenKeylistIntoAnswers(['phone', 'ie9', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':145');
      unflattenKeylistIntoAnswers(['phone', 'ie9', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':146');
      unflattenKeylistIntoAnswers(['phone', 'ie9', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':147');
      unflattenKeylistIntoAnswers(['phone', 'safari3', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':148');
      unflattenKeylistIntoAnswers(['phone', 'safari3', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':149');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':15');
      unflattenKeylistIntoAnswers(['phone', 'safari3', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':150');
      unflattenKeylistIntoAnswers(['phone', 'safari3', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':151');
      unflattenKeylistIntoAnswers(['phone', 'safari4', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':152');
      unflattenKeylistIntoAnswers(['phone', 'safari4', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':153');
      unflattenKeylistIntoAnswers(['phone', 'safari4', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':154');
      unflattenKeylistIntoAnswers(['phone', 'safari4', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':155');
      unflattenKeylistIntoAnswers(['phone', 'safari5', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':156');
      unflattenKeylistIntoAnswers(['phone', 'safari5', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':157');
      unflattenKeylistIntoAnswers(['phone', 'safari5', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':158');
      unflattenKeylistIntoAnswers(['phone', 'safari5', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':159');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':16');
      unflattenKeylistIntoAnswers(['tablet', 'air', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':160');
      unflattenKeylistIntoAnswers(['tablet', 'air', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':161');
      unflattenKeylistIntoAnswers(['tablet', 'air', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':162');
      unflattenKeylistIntoAnswers(['tablet', 'air', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':163');
      unflattenKeylistIntoAnswers(['tablet', 'chrome', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':164');
      unflattenKeylistIntoAnswers(['tablet', 'chrome', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':165');
      unflattenKeylistIntoAnswers(['tablet', 'chrome', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':166');
      unflattenKeylistIntoAnswers(['tablet', 'chrome', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':167');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':168');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':169');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':17');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':170');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':171');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':172');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':173');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':174');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':175');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':176');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':177');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':178');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':179');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':18');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':180');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':181');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':182');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':183');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':184');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':185');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':186');
      unflattenKeylistIntoAnswers(['tablet', 'edge', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':187');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_8', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':188');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_8', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':189');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':19');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_8', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':190');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_8', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':191');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_9', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':192');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_9', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':193');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_9', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':194');
      unflattenKeylistIntoAnswers(['tablet', 'gecko1_9', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':195');
      unflattenKeylistIntoAnswers(['tablet', 'ie10', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':196');
      unflattenKeylistIntoAnswers(['tablet', 'ie10', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':197');
      unflattenKeylistIntoAnswers(['tablet', 'ie10', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':198');
      unflattenKeylistIntoAnswers(['tablet', 'ie10', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':199');
      unflattenKeylistIntoAnswers(['desktop', 'air', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':2');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':20');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':200');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':201');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':202');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':203');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':204');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':205');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':206');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':207');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':208');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':209');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':21');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':210');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':211');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':212');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':213');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':214');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':215');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':216');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':217');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':218');
      unflattenKeylistIntoAnswers(['tablet', 'ie11', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':219');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':22');
      unflattenKeylistIntoAnswers(['tablet', 'ie8', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':220');
      unflattenKeylistIntoAnswers(['tablet', 'ie8', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':221');
      unflattenKeylistIntoAnswers(['tablet', 'ie8', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':222');
      unflattenKeylistIntoAnswers(['tablet', 'ie8', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':223');
      unflattenKeylistIntoAnswers(['tablet', 'ie9', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':224');
      unflattenKeylistIntoAnswers(['tablet', 'ie9', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':225');
      unflattenKeylistIntoAnswers(['tablet', 'ie9', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':226');
      unflattenKeylistIntoAnswers(['tablet', 'ie9', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':227');
      unflattenKeylistIntoAnswers(['tablet', 'safari3', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':228');
      unflattenKeylistIntoAnswers(['tablet', 'safari3', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':229');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':23');
      unflattenKeylistIntoAnswers(['tablet', 'safari3', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':230');
      unflattenKeylistIntoAnswers(['tablet', 'safari3', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':231');
      unflattenKeylistIntoAnswers(['tablet', 'safari4', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':232');
      unflattenKeylistIntoAnswers(['tablet', 'safari4', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':233');
      unflattenKeylistIntoAnswers(['tablet', 'safari4', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':234');
      unflattenKeylistIntoAnswers(['tablet', 'safari4', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':235');
      unflattenKeylistIntoAnswers(['tablet', 'safari5', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':236');
      unflattenKeylistIntoAnswers(['tablet', 'safari5', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':237');
      unflattenKeylistIntoAnswers(['tablet', 'safari5', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':238');
      unflattenKeylistIntoAnswers(['tablet', 'safari5', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':239');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':24');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':25');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':26');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':27');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_8', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':28');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_8', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':29');
      unflattenKeylistIntoAnswers(['desktop', 'air', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':3');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_8', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':30');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_8', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':31');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_9', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':32');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_9', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':33');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_9', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':34');
      unflattenKeylistIntoAnswers(['desktop', 'gecko1_9', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':35');
      unflattenKeylistIntoAnswers(['desktop', 'ie10', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':36');
      unflattenKeylistIntoAnswers(['desktop', 'ie10', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':37');
      unflattenKeylistIntoAnswers(['desktop', 'ie10', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':38');
      unflattenKeylistIntoAnswers(['desktop', 'ie10', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':39');
      unflattenKeylistIntoAnswers(['desktop', 'chrome', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':4');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':40');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':41');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':42');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':43');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':44');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':45');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':46');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':47');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':48');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':49');
      unflattenKeylistIntoAnswers(['desktop', 'chrome', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':5');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':50');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':51');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':52');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':53');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':54');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':55');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':56');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':57');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':58');
      unflattenKeylistIntoAnswers(['desktop', 'ie11', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':59');
      unflattenKeylistIntoAnswers(['desktop', 'chrome', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':6');
      unflattenKeylistIntoAnswers(['desktop', 'ie8', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':60');
      unflattenKeylistIntoAnswers(['desktop', 'ie8', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':61');
      unflattenKeylistIntoAnswers(['desktop', 'ie8', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':62');
      unflattenKeylistIntoAnswers(['desktop', 'ie8', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':63');
      unflattenKeylistIntoAnswers(['desktop', 'ie9', 'ie9', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':64');
      unflattenKeylistIntoAnswers(['desktop', 'ie9', 'ie9', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':65');
      unflattenKeylistIntoAnswers(['desktop', 'ie9', 'ie9', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':66');
      unflattenKeylistIntoAnswers(['desktop', 'ie9', 'ie9', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':67');
      unflattenKeylistIntoAnswers(['desktop', 'safari3', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':68');
      unflattenKeylistIntoAnswers(['desktop', 'safari3', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':69');
      unflattenKeylistIntoAnswers(['desktop', 'chrome', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':7');
      unflattenKeylistIntoAnswers(['desktop', 'safari3', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':70');
      unflattenKeylistIntoAnswers(['desktop', 'safari3', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':71');
      unflattenKeylistIntoAnswers(['desktop', 'safari4', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':72');
      unflattenKeylistIntoAnswers(['desktop', 'safari4', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':73');
      unflattenKeylistIntoAnswers(['desktop', 'safari4', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':74');
      unflattenKeylistIntoAnswers(['desktop', 'safari4', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':75');
      unflattenKeylistIntoAnswers(['desktop', 'safari5', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':76');
      unflattenKeylistIntoAnswers(['desktop', 'safari5', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':77');
      unflattenKeylistIntoAnswers(['desktop', 'safari5', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':78');
      unflattenKeylistIntoAnswers(['desktop', 'safari5', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':79');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':8');
      unflattenKeylistIntoAnswers(['phone', 'air', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':80');
      unflattenKeylistIntoAnswers(['phone', 'air', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':81');
      unflattenKeylistIntoAnswers(['phone', 'air', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':82');
      unflattenKeylistIntoAnswers(['phone', 'air', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':83');
      unflattenKeylistIntoAnswers(['phone', 'chrome', 'safari', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':84');
      unflattenKeylistIntoAnswers(['phone', 'chrome', 'safari', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':85');
      unflattenKeylistIntoAnswers(['phone', 'chrome', 'safari', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':86');
      unflattenKeylistIntoAnswers(['phone', 'chrome', 'safari', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':87');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'gecko1_8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':88');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':89');
      unflattenKeylistIntoAnswers(['desktop', 'edge', 'gecko1_8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':9');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'gecko1_8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':90');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'gecko1_8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':91');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie10', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':92');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie10', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':93');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie10', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':94');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie10', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':95');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie8', 'linux'], '2626970E2346F2BCAF2ECC8169326E85' + ':96');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie8', 'mac'], '2626970E2346F2BCAF2ECC8169326E85' + ':97');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie8', 'unknown'], '2626970E2346F2BCAF2ECC8169326E85' + ':98');
      unflattenKeylistIntoAnswers(['phone', 'edge', 'ie8', 'windows'], '2626970E2346F2BCAF2ECC8169326E85' + ':99');
      strongName = answers[computePropValue('gxt.device')][computePropValue('gxt.user.agent')][computePropValue('user.agent')][computePropValue('user.agent.os')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    calculadora.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc_0.createElement('link');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', computeUrlForResource(stylesheetUrl));
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats('loadExternalRefs', 'begin');
    installOneStylesheet('gwt/standard/standard.css');
    installOneStylesheet('reset.css');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  calculadora.__moduleBase = computeScriptBase();
  activeModules['calculadora'].moduleBase = calculadora.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  if ($wnd_0) {
    var devModePermitted = !!($wnd_0.location.protocol == 'http:' || $wnd_0.location.protocol == 'file:');
    $wnd_0.__gwt_activeModules['calculadora'].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = '_gwt_dummy_';
      try {
        $wnd_0.sessionStorage.setItem(key, key);
        $wnd_0.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = '__gwtDevModeHook:calculadora';
      var devModeUrl = $wnd_0.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log('Ignoring non-whitelisted Dev Mode URL: ' + devModeUrl);
        }
        devModeUrl = '';
      }
      if (devModeUrl && !$wnd_0[devModeKey]) {
        $wnd_0[devModeKey] = true;
        $wnd_0[devModeKey + ':moduleBase'] = computeScriptBase();
        var devModeScript = $doc_0.createElement('script');
        devModeScript.src = devModeUrl;
        var head = $doc_0.getElementsByTagName('head')[0];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[0]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

calculadora.succeeded = calculadora();
