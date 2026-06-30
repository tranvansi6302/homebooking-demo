# Danh sách API (gRPC)

**Dạ anh chuyển các đầu api cũ sang đầu mới này nha anh**: `grpc://05a7566cd97ec253ea57b6c32493b5ec.homebooking.global/home-booking`

**gRPC Endpoint Của MiniApp**: `grpc://05a7566cd97ec253ea57b6c32493b5ec.homebooking.global/home-booking/query/miniapps`

---

### 1. GetAllMiniAppGroups => Lấy danh sách mini app
- **Output (JSON)**:
```json
{
  "statusCode": 200,
  "isSuccess": true,
  "data": [
    {
      "Id": 4,
      "AppId": "user.global.homebooking.home",
      "Name": "Trang chủ HomeBooking",
      "CategoryId": 3,
      "CategoryName": "Booking",
      "ShortDescription": null,
      "Description": null,
      "IconUrl": "https://homebooking.global/assets/mini_apps/mini_app_4_1782669951.png",
      "Url": "https://homebooking.global/#/",
      "Version": "1.1.62",
      "RequiresAuth": false,
      "IsHidden": false,
      "IsActived": true,
      "TermsUrl": null,
      "PrivacyPolicyUrl": null,
      "CreatedAt": 1782669951,
      "FilePath": "https://homebooking.global/assets/mini_apps/files/user.global.homebooking_v1.1.62_1782488154.zip",
      "FileHash": "b90771379d541214cbbf162cc02b62097b976248d0751419db0af64086320189",
      "FileChecksum": "b90771379d541214cbbf162cc02b62097b976248d0751419db0af64086320189",
      "IsMaintenance": false,
      "Permissions": [
        "storage",
        "camera",
        "location"
      ],
      "Policy": {
        "AllowedDomains": [
          "homebooking.global"
        ],
        "AllowFileDownload": false,
        "AllowExternalNavigation": false
      },
      "GroupId": 2,
      "GroupName": "user",
      "GroupAppId": "user.global.homebooking"
    },
    {
      "Id": 5,
      "AppId": "user.global.homebooking.profile",
      "Name": "Thông tin cá nhân",
      "CategoryId": 3,
      "CategoryName": "Booking",
      "ShortDescription": null,
      "Description": null,
      "IconUrl": "https://homebooking.global/assets/mini_apps/mini_app_5_1782669976.png",
      "Url": "https://homebooking.global/#/profile",
      "Version": "1.1.62",
      "RequiresAuth": false,
      "IsHidden": false,
      "IsActived": true,
      "TermsUrl": null,
      "PrivacyPolicyUrl": null,
      "CreatedAt": 1782669976,
      "FilePath": "https://homebooking.global/assets/mini_apps/files/user.global.homebooking_v1.1.62_1782488154.zip",
      "FileHash": "b90771379d541214cbbf162cc02b62097b976248d0751419db0af64086320189",
      "FileChecksum": "b90771379d541214cbbf162cc02b62097b976248d0751419db0af64086320189",
      "IsMaintenance": false,
      "Permissions": [
        "camera",
        "location",
        "storage"
      ],
      "Policy": {
        "AllowedDomains": [
          "homebooking.global"
        ],
        "AllowFileDownload": false,
        "AllowExternalNavigation": false
      },
      "GroupId": 2,
      "GroupName": "user",
      "GroupAppId": "user.global.homebooking"
    }
  ],
  "dataType": "JSON"
}
```


---

### 2. GetAllAppMenus => Lấy danh sách menu nav
- **Output (JSON)**:
```json
{
  "statusCode": 200,
  "isSuccess": true,
  "data": [
    {
      "Id": 1,
      "MenuType": 0,
      "MnuName": "hb-wv-user-nav-home",
      "MnuImage": "https://homebooking.global/assets/app_menus/app_menu_1_1782705232.png",
      "MnuImageActived": "https://homebooking.global/assets/app_menus/app_menu_1_1782705232.png",
      "MnuBgColor": "#ffff",
      "MnuBrdColor": "#fffff",
      "MnuTxtColor": "#33333",
      "MnuTxtColorActived": "#003F3C",
      "MnuOrder": 1,
      "MnuPosition": "BOTTOM_NAV",
      "Menupid": null,
      "AppId": "user.global.homebooking.home",
      "RequiresAuth": false,
      "Url": "https://homebooking.global/#/",
      "IsHidden": true,
      "IsActionButton": false,
      "CreatedAt": 1782705232,
      "MiniappId": 4
    },
    {
      "Id": 2,
      "MenuType": 0,
      "MnuName": "hb-wv-user-nav-service",
      "MnuImage": "https://homebooking.global/assets/app_menus/app_menu_2_1782705951.png",
      "MnuImageActived": "https://homebooking.global/assets/app_menus/app_menu_2_1782705951.png",
      "MnuBgColor": "#ffff",
      "MnuBrdColor": "#fffff",
      "MnuTxtColor": "#33333",
      "MnuTxtColorActived": "#003F3C",
      "MnuOrder": 2,
      "MnuPosition": "BOTTOM_NAV",
      "Menupid": null,
      "AppId": "user.global.homebooking.services",
      "RequiresAuth": false,
      "Url": "https://homebooking.global/#/services",
      "IsHidden": true,
      "IsActionButton": false,
      "CreatedAt": 1782705951,
      "MiniappId": 12
    },
    {
      "Id": 5,
      "MenuType": 1,
      "MnuName": "hb-wv-user-nav-account",
      "MnuImage": "https://homebooking.global/assets/app_menus/app_menu_5_1782706239.png",
      "MnuImageActived": "https://homebooking.global/assets/app_menus/app_menu_5_1782706239.png",
      "MnuBgColor": "#ffff",
      "MnuBrdColor": "#ffff",
      "MnuTxtColor": "#33333",
      "MnuTxtColorActived": "#003F3C",
      "MnuOrder": 5,
      "MnuPosition": "BOTTOM_NAV",
      "Menupid": null,
      "AppId": "user.global.homebooking.profile",
      "RequiresAuth": true,
      "Url": "/account",
      "IsHidden": true,
      "IsActionButton": false,
      "CreatedAt": 1782706239,
      "MiniappId": null
    }
  ],
  "dataType": "JSON"
}
```

---

### 3. GetAllAccountMenus => Lấy danh sách menu account
- **Output (JSON)**:
```json
{
  "statusCode": 200,
  "isSuccess": true,
  "data": [
    {
      "Category": "hb-vw-mn-ac-group-support",
      "Items": [
        {
          "Id": 5,
          "Key": "hb-vw-mn-ac-help-center",
          "Category": "hb-vw-mn-ac-group-support",
          "MnuName": "hb-vw-mn-ac-help-center",
          "MnuImage": "https://homebooking.global/assets/account_menus/account_menu_5_1782711221.png",
          "MnuImageActived": "https://homebooking.global/assets/account_menus/account_menu_5_1782711221.png",
          "MnuBgColor": "#e6f2ee",
          "MnuBrdColor": "#fff",
          "MnuTxtColor": "#3333",
          "MnuTxtColorActived": "#3333",
          "Url": "https://homebooking.global/#/help-center",
          "MiniappId": 9,
          "MenuType": 0,
          "RightIcon": "https://homebooking.global/assets/account_menus/account_menu_5_1782711221.svg",
          "MnuOrder": 5,
          "RequiresAuth": false,
          "IsHidden": true,
          "IsActived": true,
          "AppId": "user.global.homebooking.help-center"
        },
        {
          "Id": 6,
          "Key": "hb-vw-mn-ac-terms-and-policies",
          "Category": "hb-vw-mn-ac-group-support",
          "MnuName": "hb-vw-mn-ac-terms-and-policies",
          "MnuImage": "https://homebooking.global/assets/account_menus/account_menu_6_1782711227.png",
          "MnuImageActived": "https://homebooking.global/assets/account_menus/account_menu_6_1782711227.png",
          "MnuBgColor": "#e6f2ee",
          "MnuBrdColor": "#ffff",
          "MnuTxtColor": "#3333",
          "MnuTxtColorActived": "#3333",
          "Url": "https://homebooking.global/#/terms-and-policies",
          "MiniappId": 10,
          "MenuType": 0,
          "RightIcon": "https://homebooking.global/assets/account_menus/account_menu_6_1782711227.svg",
          "MnuOrder": 6,
          "RequiresAuth": false,
          "IsHidden": true,
          "IsActived": true,
          "AppId": "user.global.homebooking.terms-and-policies"
        }
      ]
    },
    {
      "Category": "hb-vw-mn-ac-group-account",
      "Items": [
        {
          "Id": 1,
          "Key": "hb-vw-mn-ac-profile",
          "Category": "hb-vw-mn-ac-group-account",
          "MnuName": "hb-vw-mn-ac-personal-info",
          "MnuImage": "https://homebooking.global/assets/account_menus/account_menu_1_1782711155.png",
          "MnuImageActived": "https://homebooking.global/assets/account_menus/account_menu_1_1782711155.png",
          "MnuBgColor": "#e6f2ee",
          "MnuBrdColor": "#fffff",
          "MnuTxtColor": "#3333",
          "MnuTxtColorActived": "#3333",
          "Url": "https://homebooking.global/#/profile",
          "MiniappId": 5,
          "MenuType": 0,
          "RightIcon": "https://homebooking.global/assets/account_menus/account_menu_1_1782711155.svg",
          "MnuOrder": 1,
          "RequiresAuth": true,
          "IsHidden": true,
          "IsActived": true,
          "AppId": "user.global.homebooking.profile"
        }
      ]
    }
  ],
  "dataType": "JSON"
}
```
