import { CerebralError } from 'cerebral'

// To define your own CerebralError, which takes two arguments
// "message" and "details" is serializable. The debugger will show
// info. You can add more properties or other behaviour to your liking as well
export class ApiError extends CerebralError {}
