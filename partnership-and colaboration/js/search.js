﻿(function($){
    $('#search, #mobile-search-input, #searchField').keypress(function (e) {
        if (!e)
            e = window.event;
        
        var keyCode = null;
        if (e.keyCode) {
            keyCode = e.keyCode;
        }
        else {
            keyCode = e.charCode;
        }

        if (keyCode == 13) {
            e.preventDefault();
            window.location = getLocation($(this).closest('form'), $('.searchPage .nav-tabs-section > li[class="active"] > a'));
        }
    });

    $('.searchPage .nav-tabs-section > li > a').click(function (e) {
        e.preventDefault();
        window.location = getLocation($('#searchField').closest('form'), $(this));
    });

    function getLocation(form, searchTabObj) {
        var resultsUrl = form.attr('action');
        var query;
        if (isMobileDevice()) {
            if ($("#mobile-search-input").val().trim() != "") {
                query = $("#mobile-search-input").val().trim();
            }
            else {
                query = $("#searchField").val().trim();
            }
   
        }
        else {
            if ($("#searchField").val() == undefined) {
                query = $("#search").val().trim();
            }
            else {
                query = $("#searchField").val().trim();
            }
        }
        
        var indexCatalogue = $('input[data-sf-role="indexCatalogue"]').first().val();
        var wordsMode = $('input[data-sf-role="wordsMode"]').first().val();
        var tab = $(searchTabObj).attr('id') != null ? $(searchTabObj).attr('id') : "";

        if (tab != '') {
            var tabQuery = $(searchTabObj).data('search-query');

            if (tabQuery.toLowerCase().replace(' ', '-') != tab)
                tab = tabQuery.toLowerCase().replace(' ', '-');

            if (query == '')
                query = tabQuery;
            else if (query != '' && query.indexOf(tabQuery) < 0) {
                query += ' AND ' + tabQuery;
            }

            indexCatalogue = $(searchTabObj).data('search-index');
        }

        console.log('Search query: ' + query);

        var separator = (resultsUrl.indexOf("?") == -1) ? "?" : "&";

        var catalogueParam = separator + 'indexCatalogue=' + encodeURIComponent(indexCatalogue),
            searchQueryParam = '&searchQuery=' + encodeURIComponent(query),
            wordsModeParam = '&wordsMode=' + wordsMode,
            tabParam = '&searchTab=' + tab;

        var url = resultsUrl + catalogueParam + searchQueryParam + wordsModeParam + tabParam;

        return url;
    }

    //Dropdownlist Selectedchange event
    $('#sSortBy').change(function (value) {
        var selectedValue = $(value.currentTarget).val();
        var url = getResultsUrl(selectedValue);
        window.location.search = url;
    });

    // Returns url with all needed parameters
    function getResultsUrl(orderBy, language) {
        var orderByFieldValue = $('[data-sf-role="searchResOrderBy"]').val();
        var orderByValue = orderBy || orderByFieldValue;
        var languageFieldValue = $('[data-sf-role="searchResLanguage"]').val();
        var languageValue = language || languageFieldValue;
        var tabValue = $('[data-sf-role="searchResTab"]').val();

        var orderByParam = orderByValue ? '&orderBy=' + orderByValue : '';
        var languageParam = languageValue ? '&language=' + languageValue : '';
        var tabParam = tabValue ? '&searchTab=' + tabValue : '';

        var indexCatalogueParam = $('[data-sf-role="searchResIndexCatalogue"]').val();
        
        var searchQueryParam = $('[data-sf-role="searchResQuery"]').val();
        
        var wordsModeParam = $('[data-sf-role="searchResWordsMode"]').val();
        return '?indexCatalogue=' + indexCatalogueParam + '&' +
            'searchQuery=' + searchQueryParam + '&' +
            'wordsMode=' + wordsModeParam +
            orderByParam +
            languageParam +
            tabParam;
    }
}(jQuery));