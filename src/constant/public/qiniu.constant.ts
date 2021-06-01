/**
 * @author wizard.song
 * @date 2021/05/29 11:37
 */

import {
  auth
} from 'qiniu';

export const qiniuMac = new auth.digest.Mac(
  process.env.QINIU_ACCESS_KEY!,
  process.env.QINIU_SECRET_KEY!
);
