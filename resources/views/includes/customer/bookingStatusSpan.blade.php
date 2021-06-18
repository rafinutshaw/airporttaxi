@if ($status == 'Unpaid')
<span class="badge badge-sm badge-outline-danger"> {{ $status }} </span>

@elseif ($status == 'Pending')
<span class="badge badge-sm badge-outline-primary"> {{ $status }} </span>

@elseif ($status == 'Approved')
<span class="badge badge-sm badge-outline-info"> {{ $status }} </span>

@elseif ($status == 'Ongoing')
<span class="badge badge-sm badge-outline-light-gray-600"> {{ $status }} </span>

@elseif ($status == 'Completed')
<span class="badge badge-sm badge-outline-success"> {{ $status }} </span>

@elseif ($status == 'Canceled')
<span class="badge badge-sm badge-outline-danger"> {{ $status }} </span>
@endif