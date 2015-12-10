CommonHelpers = {
    capitalize: function(input) {
        return input.charAt(0).toUpperCase() + input.slice(1)
    },
    monthsForSelect: function () {
        return _.map(moment.months(), function(monthName, i) {
            return {label: CommonHelpers.capitalize(monthName), value: i+1};
        })
    },
    getMonthCaption: function (monthId) {
        return this.capitalize(moment.months()[monthId-1]);
    }
};