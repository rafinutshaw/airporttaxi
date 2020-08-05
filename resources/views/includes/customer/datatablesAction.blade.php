@if (isset($buttonActions['view']['visible']) && $buttonActions['view']['visible'] == true)
    <a class="btn btn-sm btn-primary mt-1" href="{{ route($buttonActions['view']['routeName'], $row->id) }}">
        {{-- <i class="fas fa-eye"></i> --}}
        View
    </a>
@endif

@if (isset($buttonActions['edit']['visible']) && $buttonActions['edit']['visible'] == true)
    <a class="btn btn-sm btn-secondary mt-1" href="{{ route($buttonActions['edit']['routeName'], $row->id) }}">
        {{-- <i class="fas fa-edit"></i> --}}
        Edit
    </a>
@endif

@if (isset($buttonActions['delete']['visible']) && $buttonActions['delete']['visible'] == true)
    <a class="btn btn-sm btn-danger mt-1" href="{{ route($buttonActions['delete']['routeName'], $row->id) }}">
        {{-- <i class="fas fa-trash-alt"></i> --}}
        Delete
    </a>
@endif