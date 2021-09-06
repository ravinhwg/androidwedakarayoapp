package com.***REMOVED***;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
      ***REMOVED***

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
      ***REMOVED***

        @Override
        protected String getJSMainModuleName() {
          return "index";
      ***REMOVED***
    ***REMOVED***;

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
***REMOVED***

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
***REMOVED***

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
    ***REMOVED***
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.***REMOVED***.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
    ***REMOVED*** catch (ClassNotFoundException e) {
        e.printStackTrace();
    ***REMOVED*** catch (NoSuchMethodException e) {
        e.printStackTrace();
    ***REMOVED*** catch (IllegalAccessException e) {
        e.printStackTrace();
    ***REMOVED*** catch (InvocationTargetException e) {
        e.printStackTrace();
    ***REMOVED***
  ***REMOVED***
***REMOVED***
}
