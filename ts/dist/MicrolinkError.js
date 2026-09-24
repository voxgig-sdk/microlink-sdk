"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrolinkError = void 0;
class MicrolinkError extends Error {
    isMicrolinkError = true;
    sdk = 'Microlink';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MicrolinkError = MicrolinkError;
//# sourceMappingURL=MicrolinkError.js.map