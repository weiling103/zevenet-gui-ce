/**
  * @license
  * Zevenet Software License
  * This file is part of the Zevenet Load Balancer software.
  *
  * Copyright (C) 2019-today ZEVENET SL, Sevilla (Spain)
  * Licensed under the terms of the GNU Affero General Public License.
  * See License.txt in the project root for license information.
**/

import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DslbRoutingModule, routedComponents } from './dslb-routing.module';
import { ZevenetModule } from '../../@core/zevenet/zevenet.module';

@NgModule({
  imports: [
    ThemeModule,
    DslbRoutingModule,
    ZevenetModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class DslbModule { }
