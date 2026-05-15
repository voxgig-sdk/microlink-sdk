<?php
declare(strict_types=1);

// Microlink SDK base feature

class MicrolinkBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MicrolinkContext $ctx, array $options): void {}
    public function PostConstruct(MicrolinkContext $ctx): void {}
    public function PostConstructEntity(MicrolinkContext $ctx): void {}
    public function SetData(MicrolinkContext $ctx): void {}
    public function GetData(MicrolinkContext $ctx): void {}
    public function GetMatch(MicrolinkContext $ctx): void {}
    public function SetMatch(MicrolinkContext $ctx): void {}
    public function PrePoint(MicrolinkContext $ctx): void {}
    public function PreSpec(MicrolinkContext $ctx): void {}
    public function PreRequest(MicrolinkContext $ctx): void {}
    public function PreResponse(MicrolinkContext $ctx): void {}
    public function PreResult(MicrolinkContext $ctx): void {}
    public function PreDone(MicrolinkContext $ctx): void {}
    public function PreUnexpected(MicrolinkContext $ctx): void {}
}
