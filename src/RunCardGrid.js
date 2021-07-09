import { __assign, __awaiter, __generator } from "tslib";
import React, { useEffect, useState } from "react";
import { List } from "immutable";
import { RunCard } from "./RunCard";
import { RunApi } from "./api/RunApi";
export var RunCardGrid = function () {
    var _a = useState([]), runs = _a[0], setRuns = _a[1];
    var fetchAllRuns = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setRuns;
                    return [4 /*yield*/, RunApi.fetchAll()];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        fetchAllRuns();
    }, []);
    var cards = List(runs).map(function (run) {
        return React.createElement(RunCard, __assign({ key: run.id }, run));
    });
    return React.createElement(React.Fragment, null, cards);
};
