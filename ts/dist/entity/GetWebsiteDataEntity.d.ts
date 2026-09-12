import { MicrolinkEntityBase } from '../MicrolinkEntityBase';
import type { MicrolinkSDK } from '../MicrolinkSDK';
import type { Control } from '../types';
import type { GetWebsiteData, GetWebsiteDataLoadMatch } from '../MicrolinkTypes';
declare class GetWebsiteDataEntity extends MicrolinkEntityBase<GetWebsiteData> {
    constructor(client: MicrolinkSDK, entopts: any);
    make(this: GetWebsiteDataEntity): GetWebsiteDataEntity;
    load(this: any, reqmatch?: GetWebsiteDataLoadMatch, ctrl?: Control): Promise<GetWebsiteDataEntity>;
}
export { GetWebsiteDataEntity };
