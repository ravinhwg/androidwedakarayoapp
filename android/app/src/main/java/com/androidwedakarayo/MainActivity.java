package com.androidwedakarayo;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.content.res.Configuration;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "androidwedakarayo";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  }

  // This is the new method we're adding: This will make appearance API work correctly
  // https://github.com/facebook/react-native/issues/28823
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
  super.onConfigurationChanged(newConfig);
  getReactInstanceManager().onConfigurationChanged(this, newConfig);
   }

}
