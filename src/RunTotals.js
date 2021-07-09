import { __awaiter, __generator } from "tslib";
import React, { useEffect, useState } from "react";
import { RunApi } from "./api/RunApi";
export var RunTotals = function () {
    var _a = useState(undefined), totals = _a[0], setTotals = _a[1];
    var fetchTotals = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setTotals;
                    return [4 /*yield*/, RunApi.fetchTotals()];
                case 1:
                    _a.apply(void 0, [(_b.sent())]);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        fetchTotals();
    }, []);
    var TotalsGrid = function () {
        var _a, _b;
        return (React.createElement("div", null,
            React.createElement("div", null,
                "Total in KM: ", (_a = totals) === null || _a === void 0 ? void 0 :
                _a.totalDistance.km,
                " "),
            React.createElement("div", null,
                "Total in Miles: ", (_b = totals) === null || _b === void 0 ? void 0 :
                _b.totalDistance.mi,
                " ")));
    };
    return (React.createElement("div", null,
        React.createElement("h3", null, "Totals"),
        React.createElement(TotalsGrid, null)));
};
