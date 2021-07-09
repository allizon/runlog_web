import { __awaiter, __generator } from "tslib";
import { API_BASE_URL } from "../env";
var RunApi = /** @class */ (function () {
    function RunApi() {
    }
    RunApi.fetchAll = function () { return __awaiter(void 0, void 0, void 0, function () {
        var out;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://" + API_BASE_URL + "/runs/all")
                        .then(function (response) { return response.json(); })
                        .then(function (json) { return json; })
                        .catch(function (error) {
                        console.log(error.toString());
                    })];
                case 1:
                    out = _a.sent();
                    return [4 /*yield*/, out];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    RunApi.fetchTotals = function () { return __awaiter(void 0, void 0, void 0, function () {
        var out;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://" + API_BASE_URL + "/runs/total")
                        .then(function (response) { return response.json(); })
                        .then(function (json) { return json; })
                        .catch(function (error) {
                        console.log(error.toString());
                    })];
                case 1:
                    out = _a.sent();
                    return [4 /*yield*/, out];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return RunApi;
}());
export { RunApi };
