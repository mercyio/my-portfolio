import React from "react";
import { AppSettingData } from "../data/appSetting";
import { AVAILABLE_TEMPLATES } from "../data/templates/config";
import BaseTemplate from "../templates/base/page";
import NeonTemplate from "../templates/neon/page";
import ShadowLayout from "../templates/shadow/page";
export default function Home() {
  return (() => {
    switch (AppSettingData.template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
      case AVAILABLE_TEMPLATES.NEON:
        return <NeonTemplate />;
      case AVAILABLE_TEMPLATES.SHADOW:
        return <ShadowLayout />;
       
    }
  })();
}
