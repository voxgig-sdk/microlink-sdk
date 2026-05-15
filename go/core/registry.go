package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetWebsiteDataEntityFunc func(client *MicrolinkSDK, entopts map[string]any) MicrolinkEntity

