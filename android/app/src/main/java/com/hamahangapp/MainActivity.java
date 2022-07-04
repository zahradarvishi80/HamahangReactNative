package com.hamahangapp;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.horcrux.svg.SvgPackage;
// import com.facebook.react.bridge.JSIModulePackage;
// import com.swmansion.reanimated.ReanimatedJSIModulePackage;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // SplashScreen.show(this, true);  // here
      super.onCreate(savedInstanceState);
      I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
      sharedI18nUtilInstance.forceRTL(this,true);
      sharedI18nUtilInstance.allowRTL(this, true);
  }
  
// @Override
// protected String getJSMainModuleName() {
//     return "index";
// }
//  @Override
//  protected JSIModulePackage getJSIModulePackage() {
//     return new ReanimatedJSIModulePackage();
//   }


  @Override
  protected String getMainComponentName() {
    return "HamahangApp";
  }

}

