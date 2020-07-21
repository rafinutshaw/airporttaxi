<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }

        a {
            color: #0087C3;
            text-decoration: none;
        }

        body {
            position: relative;
            /* width: 21cm;
            height: 29.7cm; */
            width: 17cm;
            height: 23.7cm;
            margin: 0 auto;
            color: #555555;
            background: #FFFFFF;
            font-family: Arial, sans-serif;
            font-size: 14px;
            /* font-family: SourceSansPro; */
        }

        header {
            padding: 10px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid #AAAAAA;
        }

        #logo {
            float: left;
            margin-top: 8px;
        }

        #logo img {
            height: 70px;
        }

        #company {
            float: right;
            text-align: right;
        }

        /* #company {
            float: left;
            text-align: left;
            margin-left: 10px;
        } */


        #details {
            margin-bottom: 30px;
        }

        #client {
            padding-left: 6px;
            border-left: 6px solid #0087C3;
            /* float: left; */
        }

        #client .to {
            color: #777777;
        }

        h2.name {
            font-size: 1.4em;
            font-weight: normal;
            margin: 0;
        }

        #invoice {
            /* float: right; */
            text-align: right;
        }

        #invoice h1 {
            color: #0087C3;
            font-size: 2.4em;
            line-height: 1em;
            font-weight: normal;
            margin: 0 0 10px 0;
        }

        #invoice .date {
            font-size: 1.1em;
            color: #777777;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            /* margin-bottom: 20px; */
        }

        table th,
        table td {
            padding: 20px;
            background: #EEEEEE;
            text-align: center;
            border-bottom: 1px solid #FFFFFF;
        }

        table th {
            white-space: nowrap;
            font-weight: normal;
        }

        table td {
            text-align: right;
        }

        table td h3 {
            color: #0087c3;
            font-size: 1.2em;
            font-weight: normal;
            margin: 0 0 0.2em 0;
        }

        table .no {
            color: #FFFFFF;
            font-size: 1.1em;
            /* background: #0087c3; */
            background: #0087c3;
            text-align: left;
            width: 33%;
        }

        table .desc colspan="4" {
            text-align: left;
        }

        table .unit {
            background: #DDDDDD;
        }

        table .qty {}

        table .total {
            background: #0087c3;
            color: #FFFFFF;
        }

        table td.unit,
        table td.qty,
        table td.total {
            font-size: 1.2em;
        }

        table tbody tr:last-child td {
            border: none;
        }

        table tfoot td {
            padding: 10px 20px;
            background: #FFFFFF;
            border-bottom: none;
            font-size: 1.2em;
            white-space: nowrap;
            border-top: 1px solid #AAAAAA;
        }

        table tfoot tr:first-child td {
            border-top: none;
        }

        table tfoot tr:last-child td {
            color: #0087c3;
            font-size: 1.4em;
            border-top: 1px solid #0087c3;

        }

        table tfoot tr td:first-child {
            border: none;
        }

        #thanks {
            font-size: 2em;
            margin-bottom: 50px;
        }

        #notices {
            padding-left: 6px;
            border-left: 6px solid #0087C3;
        }

        #notices .notice {
            font-size: 1.2em;
        }

        footer {
            color: #777777;
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #AAAAAA;
            padding: 8px 0;
            text-align: center;
        }

        .bg-white {
            background: white;
        }

        .text-right {
            text-align: right
        }

        .text-left {
            text-align: left
        }

        .pl-0 {
            padding-left: 0;
        }

        .pr-0 {
            padding-right: 0;
        }

    </style>
</head>

<body>
    <header class="clearfix">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td colspan="2" class="bg-white pl-0">
                        <div id="logo">
                            <img src="./images/logo.png">
                        </div>
                    </td>
                    <td colspan="2" class="bg-white pr-0">
                        <div id="" style="text-align: right">
                            <h2 class="name">UK Airport Taxi</h2>
                            <div>221B Baker Street, London, UK</div>
                            <div>00 (958) 9865 562</div>
                            <div><a href="mailto:info@ukairporttaxi.com">info@ukairporttaxi.com</a></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </header>
    <main>
        <div id="details" class="clearfix">
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr>
                        <td colspan="2" class="text-left bg-white pl-0">
                            <div id="client">
                                <div class="to">INVOICE TO:</div>
                                <h2 class="name">{{ $data['name'] }}</h2>
                                <div class="address">{{ $data['mobile'] }}</div>
                                <div class="email"><a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></div>
                            </div>
                        </td>
                        <td colspan="2" class="text-right bg-white pr-0">
                            <div id="invoice">
                                <h1>INVOICE {{ $data['invoiceNo'] }}</h1>
                                <div class="date">Date of Invoice: {{ $data['dateOfInvoice'] }}</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <table cellspacing="0" cellpadding="0" border="0">
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td class="no">Pick up</td>
                    <td class="desc" colspan="4">
                        {{ $data['from'] }}
                    </td>
                </tr>

                @isset($data['via'])
                <tr>
                    <td class="no">Via</td>
                    <td class="desc" colspan="4">
                        {{ $data['via'] }}
                    </td>
                </tr>
                @endisset

                <tr>
                    <td class="no">Drop off</td>
                    <td class="desc" colspan="4">
                        {{ $data['to'] }}
                    </td>
                </tr>

                <tr>
                    <td class="no">Type</td>
                    <td class="desc" colspan="4">
                        {{ $data['journeyType'] }}
                    </td>
                </tr>

                <tr>
                    <td class="no">Distance</td>
                    <td class="desc" colspan="4">
                        {{ $data['distance'] . ' km'}}
                    </td>
                </tr>

                <tr>
                    <td class="no">Pickup at</td>
                    <td class="desc" colspan="4">
                        {{ $data['journeyDate'] }}
                    </td>
                </tr>

                <tr>
                    <td class="no">
                        Passengers
                        @if ($data['luggage'] != 'None')
                        & Luggages
                        @endif
                    </td>
                    <td class="desc" colspan="4">
                        <h3>

                        </h3>
                        {{ $data['passengers'] }} Passenger
                        @if ($data['luggage'] != 'None')
                        & {{ $data['luggage'] }}
                        @endif
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"></td>
                    <td colspan="2">TOTAL</td>
                    <td style="text-align: right">
                        <span style="font-family: DejaVu Sans; sans-serif;">&#8356;</span>
                        {{ $data['totalPrice'] }}
                    </td>
                </tr>
            </tfoot>
        </table>
        {{-- <div id="notices">
            <div>NOTICE:</div>
            <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
        </div> --}}
    </main>
    <footer>
        Invoice was created on a computer and is valid without the signature and seal.
    </footer>
</body>

</html>
