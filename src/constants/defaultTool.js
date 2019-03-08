import { isIOS, isAndroid } from 'helpers/device';

//export default (isIOS || isAndroid) ? 'Pan' : 'AnnotationEdit';

// Changed this so slider would work immediately without needing to click the 'Pan' button
export default 'Pan';