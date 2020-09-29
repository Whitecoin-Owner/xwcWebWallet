export default {
    toolbar: {
        my_wallet: '私のウォレット',
        create_wallet: 'ウォレットを作成します',
        transfer: '送金',
        contract: 'コントラクト',
        check_tx: 'トランザクションを検索します',
        sign_raw: 'サイン',
    },
    myWalletPage: {
        my_address: '私のアドレス',
        account_name: 'アカウント名称',
        not_registered: 'まだ登録していません。',
        change_wallet: 'ウォレットに切り替えます。',
        unlock_right_now: '今すぐロックを解除します。',
        select_wallet: 'ウォレットを選択します。',
        please_input_wallet_password: 'ウォレットのパスワードを入力してください。',
    },
    keystoreInput: {
        please_open_wallet_keystore_file: 'ウォレットKeystore/wallet.jsonのファイルを開いてください',
        change_wallet: 'ウォレットに切り替えます',
        unlock_now: '今すぐロック解除します',
        select_wallet: 'ウォレットを選択します。',
        wallet_password: 'ウォレットのパスワード',
        please_input_wallet_password: 'ウォレットのパスワードを入力してください。',
        from_address: '差出人アドレス',
        please_open_locked_file: 'ロック解除するファイルを開いてください。',
        wallet_password_length_invalid: 'パスワードには8〜30桁の長さが必要です',
    },
    accountBalances: {
        wallet_balance: 'ウォレットの残高',
        hide_zero_balances: '残高0のアセットを非表示にします。',
    },
    dialogs: {
        please_confirm_tx_info: '取引情報を確認してください。',
        confirm: 'OK',
        cancel: 'キャンセルします。',
        unlock_successfully: '正常にロック解除されました。',
    },
    createWalletPage: {
        title: 'ウォレットを作成します。',
        please_save_wallet_file_line1: 'ウォレットのパスワードはウォレットのロック解除に使用されます。適切に保管してください',
        passworld_length_notice: 'パスワードの長さは8〜30文字です。',
        invalid_password_length: 'パスワードの長さが間違っています。',
        next_step: '次へ',
        now_please_download_wallet_keystore_file: '次に、ウォレットキーストアファイルをダウンロードしてください',
        download_wallet_keystore_file: 'ウォレットキーストアファイルをダウンロードします。',
        password_is_to_protect_your_private_keys_please_save_it: 'パスワードは秘密鍵の暗号化に使用されるため、安全な場所に保管してください。',
        wallet_file_is_to_get_your_assets_please_save_it: 'ウォレットファイルは、ウォレットとアセットをインポートおよび取得するために使用されます。適切に保管してください。',

        open_wallet_right_now: '今すぐウォレットを開きます。',
        please_set_password: 'ウォレットのパスワードを設定してください。',
        set_wallet_password: 'ウォレットのパスワードを設定します。',
        find_wallet_file_in_download_directory: 'ダウンロード後、ブラウザのダウンロードフォルダに移動して表示してください',
        import_mnemonic: 'Import Mnemonic',
        import_mnemonic_placeholder: 'Import Existed Mnemonic(optional)'
    },
    transferPage: {
        account_name: 'アカウント名',
        transfer_amount: '送金量',
        transfer_amount_in_dialog: '金額',
        not_registered: 'まだ登録していません。',
        send_to_address: 'アドレスに送信します。',
        please_input_to_address_or_account_name: 'アドレスまたは登録アカウント名を入力してください',
        please_select: '選択してください。',
        memo_info: '備考',
        fee: '手数料',
        transfer_right_now: '今すぐ送金します。',
        to_address: '取引先アドレス',
        tx_making: '取引作成中',
        tx_making_and_will_refresh_after_done: 'トランザクションの進行中、トランザクションは自動的に更新されます',
        you_can_also_query_tx_by_tx_hash: 'トランザクションハッシュを使用してトランザクションのステータスと結果を照会することもできます',
        back: '戻る',
        tx_failed: '取引が失敗しました。',
        tx_success: '取引が成功しました。',
        tx_on_chain_success: 'トランザクションは正常にチェーンに載せました。',
        you_can_query_tx_status_on_chain: 'XWCブロックチェーンでこのトランザクションのステータスと結果を確認できます。',
        invalid_transfer_amount_format: '送金金額の形式が正しくありません。',
        not_enough_balance: '残高が足りません。',
        invalid_to_address_format: '宛先アドレスの形式が間違っています ',
    },
    checkTxPage: {
        title: '問い合わせ',
        query_now: '今すぐ問い合わせ',
        please_input_txid_or_address: 'トランザクションハッシュ/アドレス/契約アドレスを入力してください。',
    },
    signRawPage: {
        title: 'サイン',
        sign_now: "サイン",
        please_input_content: '署名するものを入力してください',
    },
    customizeNetworkPage: {
        title: 'カスタムノード',
        add_network: 'ノードを追加',
        please_input_chain_id: 'ノードのチェーンIDを入力してください',
        please_input_node_url: 'ノードのRPC URLを入力してください'
    },
    accountInfoPage: {
        my_address: '私のアドレス',
        account_address: 'アドレス',
        account_name: 'アカウント名',
        not_registered: '登録していません。',
    },
    contractPage: {
        deploy_nav: '部門',
        invoke_nav: '実行する',
        transfer_to_contract_nav: 'コントラクトへの移行',
        select_contract_file: 'コントラクトファイルを選択してください。',
        please_select_contract_gpc_file: 'コントラクトgpcファイルを選択してください。',
        balance: '残高',
        test: 'テスト',
        submit: '提出する',
        return: '戻る',
        confirm: 'OK',
        confirmWithSpace: 'OK',
        transferWithSpace: '送金する',
        create_tx_id: 'トランザクションIDを作成',
        creator: '創始者',
        contract_address: 'コントラクトアドレス',
        contract_api: 'コントラクトAPI',
        please_input_contract_address: 'コントラクトアドレスを入力してください。',
        please_input_contract_api: 'コントラクトAPI名称を入力してください。',
        contract_arg: 'パラメータ',
        please_input_invoke_arg: 'パラメータを入力してください',
        transfer_amount: '送金量',
        memo_info: '備考',
        please_open_and_unlock_your_wallet_first: 'まず、ウォレットを開いてロックを解除してください。',
        please_select_contract_file_first: 'まず、コントラクトのファイルを開いてください。',
        please_input_to_invoke_contract_api: 'コントラクトAPIを入力してください。',
        fee: '手数料',
        please_select: '選択してください。',
        please_emulate_first: 'まず実行してテストしてください。',
        invalid_gas_price_format: 'gas priceの形式が正しくありません。',
        invalid_gas_limit_format: 'gas limitの形式が正しくありません。',
        too_large_gas_limit: 'gas limitが大きすぎます。',
        tx_not_on_chain_please_query_later: 'トランザクションはまだチェーン上にありません。後でこのトランザクションIDを確認してください',
        contract_create_height: 'チェーンの高さを作成します。',
    },
    registerAccount: {
        register_account: 'アカウントを登録します。',
        account_name: 'アカウント名',
        please_input_account_name: 'アカウント名を入力してください。',
        account_name_rule1: '2〜63文字',
        account_name_rule2: "2. 小文字または数字、文字のみを入力してください",
        account_name_rule3: '小文字で始まる必要があります。',
        fee: '手数料',
        register_now: '今すぐ登録します。',
        register_request_sent_please_refresh_later: '登録リクエストが送信されました。5秒待ってからインターフェースを更新してください。',
        your_account_name: 'アカウント名',
        return_with_space: '戻る',
        invalid_account_format: 'アカウント名の形式が正しくありません。',
        account_registered_before: 'このアカウント名は既に登録されました。',
        register_account_error_with_reason: '登録に失敗した、残高が登録料を支払うのに十分でない可能性がある、またはアカウント名が登録されています',
    },
    account_lock_balances: {
        pledge_information: '投票情報',
        pledge_miner: 'マイナーに投票する',
        pledge_currency: '投票通貨',
        currency: '通貨',
        income: '収益',
        pledge_amount: '投票数',
        operations: '操作',
        append: '追加する',
        redeem: '引き換え',
        pledge: '投票',
        back: '戻る',
        receive: '受け取る',
        receive_all: '全部を受け取る',
        pledge_income: '投票収益',
    },
    forms: {
        invalid_input_format: "入力の形式が正しくありません",
    },
    'Key derivation failed - possibly wrong passphrase': 'ロック解除に失敗しました。パスワードが間違っている可能性があります',
    'Unsupported key derivation scheme': 'ロック解除に失敗しました。パスワードファイルが間違っている可能性があります',
    'Unsupported parameters to PBKDF2': 'ロック解除に失敗し、サポートされていないPBKDF2パラメーター',
    'Not supported wallet version': 'サポートされていないウォレットバージョン',
    'Connection failed': '接続に失敗しました。',
    'Connected successfully': '正常に接続しました。',
    'websocket state error': 'ノードへの接続に失敗しました。ノードの更新または切り替えを試みてください',
    'Logout': 'ログアウトします'
};