Ext.onReady(function(){var a=window.location.search;var c={};if(a!==""){var b=a.substring(1).split("&");for(var d=0;d<b.length;d++){var e=b[d].split("=");var g=e[0];var f=e[1];c[g]=f}}if(c.lang===undefined){c.lang="fr"}var j=Ext.util.Format.format("resources/locale/ext-locale-{0}.js",c.lang);Ext.Loader.loadScript({url:j,scope:this});var h=Ext.util.Format.format("resources/locale/ams-locale-{0}.js",c.lang);Ext.Loader.loadScript({url:h,scope:this});console.log("locale -> "+c.lang)});Ext.define("AmsLocale.util.Locale",{singleton:true,getCurrentLang:function(){var g=window.location.search;var f={};if(g!==""){var d=g.substring(1).split("&");for(var c=0;c<d.length;c++){var a=d[c].split("=");var b=a[0];var e=a[1];f[b]=e}}if(f.lang===undefined){f.lang="fr"}return f.lang},switchLang:function(a){if(window.location.toString().indexOf("?")===-1){window.location.href=window.location.toString()+"?lang="+a}else{window.location.href=window.location.toString().split("?")[0]+"?lang="+a}},txtOk:"Valider",txtCancel:"Annuler",txtSociete:"Soci?t?",txtFonction:"Fonction",txtService:"Service",txtProfil:"Profil",txtUtilisateur:"Utilisateur",txtSocietes:"Soci?t?s",txtFonctions:"Fonctions",txtServices:"Services",txtProfils:"Profils",txtUtilisateurs:"Utilisateurs",txtLibelle:"Libell?",txtAjouterFonction:"Ajouter une fonction",txtAjouterService:"Ajouter un service",txtAjouterProfil:"Ajouter un profil",txtAjouterSociete:"Ajouter une soci?t?",txtAjouterUtilisateur:"Ajouter un utilisateur",txtDetailFonction:"D?tails de la fonction",txtDetailService:"D?tails du service",txtDetailProfil:"D?tails du profil",txtDetailSociete:"D?tails de la soci?t?",txtDetailUtilisateur:"D?tails de l'utilisateur",txtModifier:"Modifier",txtSupprimer:"Supprimer",txtConfiguration:"Configuration",txtErreur:"Erreur",txtDbErreur:"Erreur de base de donn?e",txtConfirmDelete:"Confirmation de supression",questionDeleteFonction:"Etes-vous sur de vouloir supprimer la fonction {0} ?",txtNewFonction:"Nouvelle fonction",txtNewService:"Nouveau service",txtNewProfil:"Nouveau profil",txtNewSociete:"Nouvelle soci?t?",txtNewUtilisateur:"Nouvel utilisateur",txtEditFonction:"Modifier la fonction",txtEditService:"Modifier le service",txtEditProfil:"Modifier le profil",txtEditSociete:"Modifier la soci?t?",txtEditUtilisateur:"Modifier l'utilisateur",txtTitle:"Administration",txtSchema:"Sch?ma",txtCode:"Code",txtTables:"Tables",txtAfficher:"Afficher",txtEcrire:"Ecrire",txtImporter:"Importer",txtExecuter:"Ex?cuter",txtGenre:"Genre",txtGenreSysteme:"Syst?me",txtGenrePerso:"Personalis?",txtOperationInterdite:"Op?ration interdite",txtSupressionProfilSystemeInterdit:"Impossible de supprimer un profil syst?me",txtFonctionalites:"Fonctionalit?es",questionDeleteProfil:"Etes-vous sur de vouloir supprimer le profil {0} ?",questionDeleteService:"Etes-vous sur de vouloir supprimer le service {0} ?",questionDeleteSociete:"Etes-vous sur de vouloir supprimer la soci?t? {0} ?",txtNom:"Nom",txtLogin:"Login",txtPrenom:"Pr?nom",txtPassword:"Mot de passe",txtFamDec:"Famille de d?coupage",txtCdDec:"Code de d?coupage",questionDeleteUser:"Etes-vous sur de vouloir supprimer l'utilisateur {0} ?",txtAuthErreur:"Erreur d'Authentification",txtAuthErreurMauvaiseReponse:"Le serveur d'authentification ? renvoy? une r?ponse invalide",txtAuthErreurMauvaiseLogin:"Les informations d'authentification sont erron?es",txtAuthentification:"Authentification",txtConnexion:"Connexion",txtMonCompte:"Mon compte",txtDeconnexion:"D?connexion",txtPret:"Pr?t",txtChargement:"Chargement",txtLang:"Language",txtLangFr:"Fran?ais",txtLangEn:"Anglais",txtChargementDonnees:"Chargement des donn?es ...",txtMajDonnees:"Synchronisation serveur ...",txtTitreCompte:"Compte utilisateur"});Ext.define("AmsLocale.view.locale.ComboLanguage",{extend:"Ext.form.field.ComboBox",requires:["Ext.form.field.ComboBox","AmsLocale.util.Locale"],queryMode:"local",displayField:"libelle",valueField:"code",xtype:"ams-combo-lang",editable:false,watchChange:true,listeners:{change:function(a,d,b,c){if(this.watchChange===true){AmsLocale.util.Locale.switchLang(d)}},afterrender:function(){this.watchChange=false;var a=AmsLocale.util.Locale.getCurrentLang();console.log(a);this.setValue(a);this.watchChange=true}},initComponent:function(){this.setStore(Ext.create("Ext.data.Store",{fields:["code","libelle"],data:[{code:"fr",libelle:AmsLocale.util.Locale.txtLangFr},{code:"en",libelle:AmsLocale.util.Locale.txtLangEn}]}));this.callParent(arguments)}});