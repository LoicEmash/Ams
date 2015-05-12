Ext.define('AmsDomainSig.model.SigBase', {
    requires: [
        'Ext.data.Model'
    ],
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'AmsDomainSig.model',
        id: 'Sig',
        models: [
            'AmsDomainSig.model.SigTheme',
            'AmsDomainSig.model.SigTree'
        ]
    }
});

Ext.define('AmsDomainSig.model.SigTheme', {
    extend: 'AmsDomainSig.model.SigBase',
    requires: [
        'AmsDomainSig.model.SigBase',
        'AmsData.data.proxy.SecureRestProxy'
    ],
    proxy: Ext.create('AmsData.data.proxy.SecureRestProxy', {
        table: 'SigTheme',
        schema: 'Sig'
    }),
    tableDisplayName: 'th�mes',
    fields: [
        {
            name: 'id',
            type: 'int',
            allowNull: false
        },
        {
            name: 'code',
            type: 'string',
            allowNull: false
        },
        {
            name: 'lib',
            type: 'string',
            allowNull: true
        }
    ]
});

Ext.define('AmsDomainSig.model.SigTree', {
    extend: 'AmsDomainSig.model.SigBase',
    requires: [
        'AmsDomainSig.model.SigBase',
        'AmsData.data.proxy.SecureRestProxy',
        'AmsDomainSig.model.SigTheme'
    ],
    proxy: Ext.create('AmsData.data.proxy.SecureRestProxy', {
        table: 'SigTree',
        schema: 'Sig'
    }),
    tableDisplayName: 'arbe de th�me',
    fields: [
        {
            name: 'id',
            type: 'int',
            allowNull: false
        },
        {
            name: 'sigThemeId',
            type: 'int',
            allowNull: false,
            reference: 'SigTheme'
        },
        {
            name: 'parentId',
            type: 'int',
            allowNull: true
        },
        {
            name: 'lib',
            type: 'string',
            allowNull: false
        },
        {
            name: 'jsonParam',
            type: 'string',
            allowNull: true
        }
    ]
});

Ext.define('AmsDomainSig.model.SigRepository', {
    singleton: true,
    requires: [
        'AmsDomainSig.model.SigTheme',
        'AmsDomainSig.model.SigTree'
    ]
});
