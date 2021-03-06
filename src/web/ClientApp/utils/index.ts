import * as React from 'react';

const createReactClass = require('create-react-class');

interface IDateFormat {
    month: string,
    day: string
};

export interface ITuesday {
    date: Date,
    label: string,
    attr: { disabled?: boolean }
};

export interface IReducerAction {
    type: string,
    payload?: object
};

export const BindClosures = (closuresMap: any) => {
    return (Component: any) => {
        const componentName = Component.displayName || Component.name || 'Component';
        const closureNames = Object.keys(closuresMap);

        const spec = closureNames.reduce((memo: any, closureName: string) => {
            const injectedClosure = closuresMap[closureName];

            memo[closureName] = function boundClosure(...args: any[]) {
                return injectedClosure(this.props, ...args);
            };

            return memo;
        }, {});

        spec.componentWillMount = function componentWillMount() {
            this.__closures = closureNames.reduce((memo: any, closureName: string) => {
                memo[closureName] = this[closureName];
                return memo;
            }, {});
        };

        spec.render = function render() {
            const newProps = {
                ...this.props,
                ...this.__closures
            };

            return Component(newProps);
        };

        spec.displayName = 'ClosureWrapper(' + componentName + ')';

        return createReactClass(spec);
    };
};

export const LeftPad = (number: number, padLength: number): string => {
    let output = number + '';

    while (output.length < padLength) {
        output = '0' + output;
    }

    return output;
}

export const GetFormattedDate = (date: Date, format: IDateFormat = { month: 'short', day: '2-digit' }): string => {
    return date.toLocaleDateString("en-US", format) + " " + date.getFullYear();
}

let tuesdayCache: any = { };

export const GetTuesdays = (month: string, year: number): ITuesday[] => {
    const today = new Date();
    const monthNumber = Number(month);
    const dateKey = year + LeftPad(monthNumber, 2);

    let tuesdays: ITuesday[] = tuesdayCache[dateKey];

    if (!tuesdays) {
        var d: Date = new Date(year, monthNumber);

        tuesdays = [];

        // Get the first Tuesday in the month
        d.setDate(d.getDate() + (9 - d.getDay()) % 7);

        // Get all the other Tuesdays in the month
        while (d.getMonth() === monthNumber) {
            tuesdays.push({
                date: d,
                attr: {},
                label: GetFormattedDate(d)
            });

            d.setDate(d.getDate() + 7); // Get the next Tuesday
        }

        tuesdayCache[dateKey] = tuesdays;
    }

    tuesdays.forEach((tues: ITuesday) => {
        let day = tues.date;

    /*
        let dayDate = day.getDate();
        let dayMonth = day.getMonth();
        let dayYear = day.getFullYear();
        let sunDate = new Date(dayYear, dayMonth, dayDate - 2);
        let satDate = new Date(dayYear, dayMonth, dayDate + 4);
        
        tues.attr.checked = (day === today) || (sunDate <= today && satDate >= today);
    */
        tues.attr.disabled = day > today;
    });

    return tuesdays;
};

export const YearArray = ((startYear: number, endYear: number): number[] => {
    let years: number[] = [];

    for (let year: number = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

export const MonthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Returns reducer based on key-type "action.type"
 */
export const CreateReducer = (initialState: object, handlers: any) => (state = initialState, action: IReducerAction) => {
    const handler = handlers[action.type];

    return handler ? handler(state, action.payload) : state;
};