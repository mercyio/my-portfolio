import React from "react";
import { AppSetting } from "../data/appSetting";
import { AVAILABLE_TEMPLATES } from "../data/templates/config";
import BaseTemplate from "../templates/base/page";

export default function Home() {
  return (() => {
    switch (AppSetting.template) {
      case AVAILABLE_TEMPLATES.BASE:
        return <BaseTemplate />;
    }
  })();
}
