TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

Games.helpers({
    getNiceDate: function () {
        var user = Meteor.users.findOne({_id: this.userId});
        return user && user.emails[0].address;
    }
});

TabularTables.Games = new Tabular.Table({
    name: "Games",
    collection: Games,
    columns: [
        {
            title: "E-mail",
            tmpl: Meteor.isClient && Template.rowItemUserViewLink
        },
        {
            data: "month",
            title: "Период показаний",
            tmpl: Meteor.isClient && Template.rowItemPeriod

        },
        {data: "date", title: "Дата"},
        {data: "time", title: "Время"},
        {
            title: "Игроки",
            tmpl: Meteor.isClient && Template.rowItemUserViewLink
        },
        {data: "comment", title: "Комментарий", autoWidth: false}
    ],
    language: {
        "processing": "Подождите...",
        "search": "Поиск:",
        "lengthMenu": "Показать _MENU_ записей",
        "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
        "infoEmpty": "Записей нет",
        "infoFiltered": "(отфильтровано из _MAX_ записей)",
        "infoPostFix": "",
        "loadingRecords": "Загрузка записей...",
        "zeroRecords": "Записи отсутствуют.",
        "emptyTable": "В таблице отсутствуют данные",
        "paginate": {
            "first": "Первая",
            "previous": "Предыдущая",
            "next": "Следующая",
            "last": "Последняя"
        },
        "aria": {
            "sortAscending": ": активировать для сортировки столбца по возрастанию",
            "sortDescending": ": активировать для сортировки столбца по убыванию"
        }
    }
});